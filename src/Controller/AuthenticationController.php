<?php

namespace App\Controller;

use Exception;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AuthenticationController extends AbstractController
{
    private $request;
    private $entityManager;

    public function __construct(Request $request, EntityManagerInterface $entityManager)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;
    }

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


    /**
     *@Route("/api/register",name="api_register",methods="POST") 
     */
    public function register(UserPasswordHasherInterface $passwordHasher)
    {

        $user = new User();
        $manager =  $this->entityManager;

        try {
            $body = $this->request->getContent();
            $body = json_decode($body, true);

            $username = $body['username'];
            $plaintextPassword = $body['password'];
            $telephone = $body['telephone'];
            if (empty($username) || empty($plaintextPassword)) {
                throw new Exception("Champs Manquants");
            }

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );

            $user->setUsername($username)->setPassword($hashedPassword);
            $manager->persist($user);
            $manager->flush();

            $response = new Response();
            $response->setContent(json_encode([
                'message' => "compte crée",
            ]));
            $response->setStatusCode(201);
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            $response = new Response();
            $response->setContent(json_encode([
                "code" => 500,
                'message' =>  $message,
            ]));
            $response->setStatusCode(500);
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }
    }
}