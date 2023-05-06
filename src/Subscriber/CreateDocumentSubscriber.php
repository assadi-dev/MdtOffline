<?php

namespace App\Subscriber;

use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class CreateDocumentSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            'kernel.response' => ['addDocument', EventPriorities::POST_RESPOND],
        ];
    }

    public function addDocument(ResponseEvent $event)
    {
        // dd($event);
        //   die();
    }
}
