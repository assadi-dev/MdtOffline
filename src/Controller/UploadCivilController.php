<?php

namespace App\Controller;

use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;


class UploadCivilController extends AbstractController
{



    public function __invoke(Request $request)
    {


        $project_dir = $this->getParameter("project_dir");
        $civil = $request->attributes->get("data");
        $file = $request->files->get("photo");
        $civil->setFile($file);
        $civil->setUpdatedAt(new DateTime());
        $filePath = $project_dir . "/uploads/images/agents/";

        return  $civil;
    }
}