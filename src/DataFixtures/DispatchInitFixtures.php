<?php

namespace App\DataFixtures;

use App\Entity\DispatchManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class DispatchInitFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $initialState = $this->generate_dropList();

        $dispatchManager = new DispatchManager();
        $dispatchManager->setCurrentState($initialState);
        $manager->persist($dispatchManager);
        $manager->flush();
    }



    public function generate_dropList()
    {
       return json_decode('[{"id":"list-dispatch","title":"Dispatch","categories":[{"id":"categories-en-attente-dispatch","title":"⌛ En Attente Dispatch","cards":[],"background":"#131B26","color":"#FFFFFF"}]},{"id":"list-secteur-sud","title":"Secteur Sud","categories":[{"id":"categories-secteur-3","title":"Secteur 3","cards":[],"background":"#131B26","color":"#FFFFFF"}]},{"id":"list-secteur-nord","title":"Secteur Nord","categories":[{"id":"categories-secteur-2","title":"Secteur 2","cards":[],"background":"#FFBB33","color":"#131B26"}]},{"id":"list-hors-terrain","title":"Hors Terrain","categories":[{"id":"categories-police-academy","title":"Police Academy","cards":[],"background":"#33B5E5","color":"#131B26"},{"id":"categories-tribunal","title":"Tribunal","cards":[],"background":"#33B5E5","color":"#131B26"}]},{"id":"list-operation-center","title":"Operation center","categories":[{"id":"categories-dispatcher","title":"Dispatcher","cards":[],"background":"#131B26","color":"#FFFFFF"},{"id":"categories-co-dispatcher","title":"Co-Dispatcher","cards":[],"background":"#131B26","color":"#FFFFFF"},{"id":"categories-operator","title":"Operator","cards":[],"background":"#131B26","color":"#FFFFFF"},{"id":"categories-supervisor","title":"Supervisor","cards":[],"background":"#131B26","color":"#FFFFFF"}]},{"id":"list-info","title":"Infos","categories":[{"id":"categories-code","title":"Code","cards":[],"background":"#131B26","color":"#FFFFFF"}]}]',true);

    }




}