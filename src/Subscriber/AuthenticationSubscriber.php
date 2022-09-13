<?php

use App\Entity\User;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class AuthenticationSubscriber implements EventSubscriberInterface
{



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
            $data["username"] = $user->getUsername();
        }

        $event->setData($data);
    }
}