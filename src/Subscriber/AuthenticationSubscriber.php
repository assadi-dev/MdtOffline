<?php

namespace App\Subscriber;

use App\Entity\Agent;
use App\Entity\User;
use App\Repository\AgentRepository;
use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class AuthenticationSubscriber implements EventSubscriberInterface
{

    private $agentRepository;

    public function __construct(AgentRepository $agentRepository)
    {
        $this->agentRepository = $agentRepository;
    }


    public static function getSubscribedEvents()
    {
        return [
            'lexik_jwt_authentication.on_jwt_created' => 'onLexikJwtAuthenticationOnJwtCreated',
        ];
    }

    public function onLexikJwtAuthenticationOnJwtCreated(JWTCreatedEvent $event)
    {
        // ...

        $data = $event->getData();
        $user = $event->getUser();


        if ($user instanceof UserInterface) {
            $data["id"] = $user->getId();
            $data["username"] = $user->getUsername();
            $agent =  $this->agentRepository->findOneBy(["id" => $user->getId()]);
            if ($agent instanceof Agent) {
                $data["grade"] = $agent->getGrade()->getNom();
                $data["matricule"] = $agent->getMatricule();
                $data["validate"] = $user->isValidate();
            }
        }

        $event->setData($data);
    }
}