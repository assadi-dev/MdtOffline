<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Repository\ArrestFolderRepository;

/**
 * @ORM\Entity(repositoryClass=ArrestFolderRepository::class)
 */
class ArrestFolder
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
     * @ORM\Column(type="string", length=10)
     */
    private $entreeCellule;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $infractions;

    /**
     * @ORM\Column(type="boolean")
     */
    private $avocat;

    /**
     * @ORM\Column(type="text")
     */
    private $tentative;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $rapport;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $media;

    /**
     * @ORM\Column(type="boolean")
     */
    private $droitMiranda;

    /**
     * @ORM\Column(type="boolean")
     */
    private $soins;

    /**
     * @ORM\Column(type="boolean")
     */
    private $nourriture;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isEnclose;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $enclosedAt;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
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

    public function isAvocat(): ?bool
    {
        return $this->avocat;
    }

    public function setAvocat(bool $avocat): self
    {
        $this->avocat = $avocat;

        return $this;
    }

    public function getTentative(): ?string
    {
        return $this->tentative;
    }

    public function setTentative(string $tentative): self
    {
        $this->tentative = $tentative;

        return $this;
    }

    public function getRapport(): ?string
    {
        return $this->rapport;
    }

    public function setRapport(?string $rapport): self
    {
        $this->rapport = $rapport;

        return $this;
    }

    public function getMedia(): ?string
    {
        return $this->media;
    }

    public function setMedia(?string $media): self
    {
        $this->media = $media;

        return $this;
    }

    public function isDroitMiranda(): ?bool
    {
        return $this->droitMiranda;
    }

    public function setDroitMiranda(bool $droitMiranda): self
    {
        $this->droitMiranda = $droitMiranda;

        return $this;
    }

    public function isSoins(): ?bool
    {
        return $this->soins;
    }

    public function setSoins(bool $soins): self
    {
        $this->soins = $soins;

        return $this;
    }

    public function isNourriture(): ?bool
    {
        return $this->nourriture;
    }

    public function setNourriture(bool $nourriture): self
    {
        $this->nourriture = $nourriture;

        return $this;
    }

    public function isIsEnclose(): ?bool
    {
        return $this->isEnclose;
    }

    public function setIsEnclose(bool $isEnclose): self
    {
        $this->isEnclose = $isEnclose;

        return $this;
    }

    public function getEnclosedAt(): ?\DateTimeInterface
    {
        return $this->enclosedAt;
    }

    public function setEnclosedAt(?\DateTimeInterface $enclosedAt): self
    {
        $this->enclosedAt = $enclosedAt;

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