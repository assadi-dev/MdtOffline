<?php

namespace App\Controller;

use Exception;
use App\Entity\PanicButton;
use App\Repository\AgentRepository;
use App\Repository\GradeRepository;
use DateTime;
use DateTimeImmutable;
use Symfony\Component\Mercure\Update;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PanicButtonController extends AbstractController
{
    private $request;
    private $agentRepository;
    private $gradeRepository;
    private $entityManager;
    private $hub;



    public function __construct(Request $request, AgentRepository $agentRepository, GradeRepository $gradeRepository, EntityManagerInterface $entityManager, HubInterface $hub)
    {
        $this->request = $request;
        $this->agentRepository = $agentRepository;
        $this->gradeRepository = $gradeRepository;
        $this->entityManager = $entityManager;
        $this->hub = $hub;


    }


        /**
         *  @Route("/api/panic_button/add", name="app_panic_button_add", methods="POST")
         *
         */
        public function add_panic_trigger(): response
        {

            $body = json_decode($this->request->getContent(), true);




            try {

                if(empty($body["name"])) {
                    throw new Exception("Le champs name est vide");
                }

                $name = $body['name'];

                $agent = $this->agentRepository->findOneBy(["name"=>$name]);



                if(empty($agent)) {
                    throw new Exception("L'utilisateur $name est introuvable dans notre base de donnée");
                }

                $name = $agent->getName();
                $matricule = $agent->getMatricule();
                $grade =$this-> getGrade($agent->getGrade()->getId());

                $panicButton = new PanicButton();
                $panicButton->setName($name);
                $panicButton->setMatricule($matricule);
                $panicButton->setGrade($grade);
                $this->entityManager->persist($panicButton);
                $this->entityManager->flush();

                $activateAt = $panicButton->getActivateAt()->format("c");




                $url_topic = $_SERVER["TOPIC_URL"];

                $data = ["id"=>$panicButton->getId() ,  "name"=> $panicButton->getName(),"matricule"=> $panicButton->getMatricule(),"grade"=> $panicButton->getGrade(),"activateAt"=>$activateAt];


                $update = new Update(
                    $url_topic."PanicButton/update",
                    json_encode($data)
                );

                $this->hub->publish($update);



                $response = new Response();
                $response->setContent(json_encode($data));
                $response->setStatusCode(200);
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


        public function getGrade($id)
        {
            $grade =  $this->gradeRepository->findOneBy(["id"=>$id]);
            return $grade->getNom();
        }

}
