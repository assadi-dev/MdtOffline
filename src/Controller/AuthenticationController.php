<?php

namespace App\Controller;

use Exception;
use App\Entity\User;
use App\Entity\Agent;
use App\Entity\Grade;
use App\Repository\GradeRepository;
use function PHPUnit\Framework\isEmpty;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
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
    public function register(UserPasswordHasherInterface $passwordHasher, GradeRepository $gradeRepository)
    {

        $user = new User();
        $agent = new Agent();
        $manager =  $this->entityManager;
        $getRookieGrade = $gradeRepository->findOneBy(["nom" => "Rookie"]);



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
            $agent->setTelephone($telephone)->setName($username);
            if ($getRookieGrade instanceof Grade) {
                $agent->setGrade($getRookieGrade);
            }

            $user->setUsername($username)->setPassword($hashedPassword)->setAgent($agent);
            $manager->persist($agent);
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

            if (stripos($message,"Duplicate entry")){

             $message = "Cette identifiant est déjà présente dans la base de données veuillez séléctionner une autre";

            }

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

    /**
     *@Security("is_granted('IS_AUTHENTICATED_FULLY')")
     *@Route("/api/update_password/{id}",name="api_change_password",methods="PUT") 
     */
    public function changePassword($id, User $user,UserPasswordHasherInterface $passwordHasher)
    {
        $manager = $this->entityManager;
        $body = $this->request->getContent();
        $body = json_decode($body, true);



        try {
            //code...
            if(!isset($body["password"]) || empty($body["password"]) ){
                throw new Exception("le mot de passe est vide");
            }

            if(!isset($body["password"]) || empty($body["password"]) ){
                throw new Exception("la confirmation est vide");
            }


            $plaintextPassword = $body["password"];
            $confirmPassword = $body["confirm"];

            if(strcmp($plaintextPassword,$confirmPassword) !== 0){

             throw new Exception("le mot de passe est different de la confirmation");
                

            }


            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );

            $user->setPassword($hashedPassword);
            $manager->persist($user);
            $manager->flush();
            $response = new Response();
            $response->setContent(json_encode([
                'message' => "Votre mot de passe à été mise à jour",
            ]));
            $response->setStatusCode(200);
            $response->headers->set('Content-Type', 'application/json');
            return $response;


        } catch (\Throwable $th) {
            //throw $th;
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