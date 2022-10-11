<?php

namespace App\Controller;

use DateTime;
use App\Entity\Agent;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Vich\UploaderBundle\Storage\StorageInterface;

class UploadAgentController extends AbstractController
{



    public function __invoke(Request $request)
    {


        $project_dir = $this->getParameter("project_dir");
        $agent = $request->attributes->get("data");
        $file = $request->files->get("photo");
        $agent->setFile($file);
        $agent->setUpdatedAt(new DateTime());
        $filePath = $project_dir . "/uploads/images/agents";

        return  $agent;
    }
}