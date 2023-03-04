<?php

namespace App\Entity;

use App\Repository\SaisieRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SaisieRepository::class)
 */
class Saisie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $idAgent;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $depositAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $poste;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $depot;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;



    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->depositAt = new DateTimeImmutable();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdAgent(): ?int
    {
        return $this->idAgent;
    }

    public function setIdAgent(int $idAgent): self
    {
        $this->idAgent = $idAgent;

        return $this;
    }

    public function getDepositAt(): ?\DateTimeImmutable
    {
        return $this->depositAt;
    }

    public function setDepositAt(\DateTimeImmutable $depositAt): self
    {
        $this->depositAt = $depositAt;

        return $this;
    }

    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(?string $poste): self
    {
        $this->poste = $poste;

        return $this;
    }

    public function getDepot(): ?string
    {
        return $this->depot;
    }

    public function setDepot(?string $depot): self
    {
        $this->depot = $depot;

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
}