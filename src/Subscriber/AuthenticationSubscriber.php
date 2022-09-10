<?php

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;


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
        dd($data);
        //  $data["username"] = $event->getUser()->getUserIdentifier();

        //$event->setData($data);
    }
}