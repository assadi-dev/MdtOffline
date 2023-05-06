<?php

namespace App\Subscriber;

use App\Entity\DispatchManager;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class DispatchManagerSubscriber implements EventSubscriberInterface
{
    private $hub;

    public function __construct(HubInterface $hub)
    {
        $this->hub = $hub;

    }


    public static function getSubscribedEvents()
    {
        return [
            'kernel.view' => ['publishDispatch', EventPriorities::POST_WRITE],
        ];
    }

    public function publishDispatch(ViewEvent $event)
    {

        $dispatch = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();


        if($dispatch  instanceof DispatchManager && $method == Request::METHOD_PUT) {

            $url_topic = $_SERVER["TOPIC_URL"];

            $current = $dispatch->getCurrentState();

            $update = new Update(
                $url_topic."dispatch/update",
                json_encode($current)
            );

            $this->hub->publish($update);

            return $dispatch;

        }





    }


}
