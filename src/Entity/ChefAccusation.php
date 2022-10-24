<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\ChefAccusationRepository;

/**
 * @ORM\Entity(repositoryClass=ChefAccusationRepository::class)
 * @ApiFilter(SearchFilter::class, properties={"categorie" : "exact"})
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
     * @ORM\Column(type="integer")
     */
    private $amendes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $peines;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Gedmo\Timestampable(on="update")
     */
    private $updatedAt;


    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
    }



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

    public function getAmendes(): ?int
    {
        return $this->amendes;
    }

    public function setAmendes(int $amendes): self
    {
        $this->amendes = $amendes;

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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}