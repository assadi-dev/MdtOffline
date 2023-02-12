<?php

namespace App\Controller;

use Exception;
use App\Entity\User;
use App\Entity\Agent;
use App\Entity\ForgottenPassword;
use App\Entity\Grade;
use App\Repository\UserRepository;
use App\Repository\GradeRepository;

use App\Services\TokenGeneratorService;
use function PHPUnit\Framework\isEmpty;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class ForgottenPasswordController extends AbstractController
{
    private $request;
    private $entityManager;
    private $userRepository;

    public function __construct(Request $request, EntityManagerInterface $entityManager,UserRepository $userRepository)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
    }


    /**
     * @Route("/api/forgotten_password/validation",name="api_updateForgottenPassword",methods="POST") 
     */
    public function updateForgotenPassword(){


    }

        /**
     * @Route("/api/forgotten_password/generate",name="api_create_forgotten_password",methods="POST") 
     */
    public function gnerate_token_password( JWTTokenManagerInterface $JWTManager){

      try {
        $body = $this->request->getContent();
        $body = json_decode($body, true);

        $username = $body['username'];
        $user = $this->userRepository->findOneBy(["username"=>$username]);

        if(empty($user))  throw new Exception("L'utilisateur $username est introuvable dans notre base de donnée");

        $jwtManager = new TokenGeneratorService("mdt-secret");
        $token = $jwtManager->generateToken(["username"=>$username]);

        $forgottenPassDemand = new ForgottenPassword();
        $forgottenPassDemand->setUserId($user->getId())->setToken($token);
    
        /**Persist Data */
        $this->entityManager->persist($forgottenPassDemand);
        $this->entityManager->flush();
    
        $response = new Response();
        $response->setContent(json_encode(["result"=>"success","message"=>"Votre demande à biens été pris en compte veuillez informer un membre du Command Staff pour recevoir votre liens de reinitialisation"]));
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