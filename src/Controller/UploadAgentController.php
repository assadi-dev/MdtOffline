<?php

namespace App\Controller;

use DateTime;
use App\Entity\Agent;
use Symfony\Component\HttpFoundation\Request;
use Vich\UploaderBundle\Storage\StorageInterface;

class UploadAgentController
{


    public function __invoke(Agent $agent, Request $request)
    {



        $file = $request->files->get("photo");
        $agent->setFile($file);
        $agent->setUpdatedAt(new DateTime());
        return "ok";
    }
}