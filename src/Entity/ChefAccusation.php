<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ChefAccusationRepository;

/**
 * @ORM\Entity(repositoryClass=ChefAccusationRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 */
class ChefAccusation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $infraction;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $categorie;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $niveau;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $amende;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $peines;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInfraction(): ?string
    {
        return $this->infraction;
    }

    public function setInfraction(string $infraction): self
    {
        $this->infraction = $infraction;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getNiveau(): ?int
    {
        return $this->niveau;
    }

    public function setNiveau(?int $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getAmende(): ?string
    {
        return $this->amende;
    }

    public function setAmende(string $amende): self
    {
        $this->amende = $amende;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(?string $notes): self
    {
        $this->notes = $notes;

        return $this;
    }

    public function getPeines(): ?string
    {
        return $this->peines;
    }

    public function setPeines(string $peines): self
    {
        $this->peines = $peines;

        return $this;
    }
}