<?php

namespace App\Controller;

use Symfony\Component\Mercure\Update;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class PublishTest extends AbstractController
{
    /**
     * @Route("/api/publish", name="app_publish", methods="GET")
     */
    public function index(HubInterface $hub): Response
    {

        $url_topic = $_SERVER["TOPIC_URL"];

        $update = new Update(
            $url_topic."dispatch/update",
            json_encode(['status' => 'OutOfStock'])
        );

        $hub->publish($update);



        return new Response('published!');

    }
}
