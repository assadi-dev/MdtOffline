<?php

namespace App\Controller;

use App\Repository\CivilRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class SearchCivilController extends AbstractController
{
    private $civilRepository;

    public function __construct(CivilRepository $civilRepository)
    {
        $this->civilRepository = $civilRepository;
    }


    public function __invoke(Request $request)
    {

        $searchTerm =  $request->query->get("searchTerm");
        $result = $searchTerm ? $this->civilRepository->search($searchTerm) : $this->civilRepository->findAll();
        return $result;
    }
}