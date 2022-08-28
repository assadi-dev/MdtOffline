<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArrestReportRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=ArrestReportRepository::class)
 * @ApiResource()
 */
class ArrestReport
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
    private $lieux;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $entreeCellule;

    /**
     * @ORM\Column(type="text")
     */
    private $infractions;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tentative;

    /**
     * @ORM\Column(type="boolean")
     */
    private $complicite;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantite;

    /**
     * @ORM\Column(type="integer")
     */
    private $amende;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $peine;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLieux(): ?string
    {
        return $this->lieux;
    }

    public function setLieux(string $lieux): self
    {
        $this->lieux = $lieux;

        return $this;
    }

    public function getEntreeCellule(): ?string
    {
        return $this->entreeCellule;
    }

    public function setEntreeCellule(string $entreeCellule): self
    {
        $this->entreeCellule = $entreeCellule;

        return $this;
    }

    public function getInfractions(): ?string
    {
        return $this->infractions;
    }

    public function setInfractions(string $infractions): self
    {
        $this->infractions = $infractions;

        return $this;
    }

    public function isTentative(): ?bool
    {
        return $this->tentative;
    }

    public function setTentative(bool $tentative): self
    {
        $this->tentative = $tentative;

        return $this;
    }

    public function isComplicite(): ?bool
    {
        return $this->complicite;
    }

    public function setComplicite(bool $complicite): self
    {
        $this->complicite = $complicite;

        return $this;
    }

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(int $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getAmende(): ?int
    {
        return $this->amende;
    }

    public function setAmende(int $amende): self
    {
        $this->amende = $amende;

        return $this;
    }

    public function getPeine(): ?string
    {
        return $this->peine;
    }

    public function setPeine(string $peine): self
    {
        $this->peine = $peine;

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

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}