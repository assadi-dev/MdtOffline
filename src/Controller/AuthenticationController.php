<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AuthenticationController extends AbstractController
{

    /**
     *@Route("/api/login",name="api_login",methods="POST") 
     */
    public function login()
    {
        $user = $this->getUser();
        return $this->json([$user]);
    }

    /**
     *@Route("/api/logout",name="api_logout",methods="POST") 
     */
    public function logout()
    {
    }
}