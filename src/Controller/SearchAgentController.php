<?php

namespace App\Controller;

use App\Repository\AgentRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class SearchAgentController extends AbstractController
{
    private $agentRepository;

    public function __construct(AgentRepository $agentRepository)
    {
        $this->agentRepository = $agentRepository;
    }


    public function __invoke(Request $request)
    {

        $searchTerm =  $request->query->get("searchTerm");
        $result = $searchTerm ? $this->agentRepository->search($searchTerm) : $this->agentRepository->findAll();
        return $result;
    }
}