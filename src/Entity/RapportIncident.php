<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RapportIncidentRepository;
use DateTime;
use DateTimeImmutable;

/**
 * @ORM\Entity(repositoryClass=RapportIncidentRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 */
class RapportIncident
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $rapport;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typeIncident;

    /**
     * @ORM\Column(type="integer")
     */
    private $idAgentConcerned;

    /**
     * @ORM\Column(type="integer")
     */
    private $idAgent;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lieuxIncident;



    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRapport(): ?string
    {
        return $this->rapport;
    }

    public function setRapport(string $rapport): self
    {
        $this->rapport = $rapport;

        return $this;
    }

    public function getTypeIncident(): ?string
    {
        return $this->typeIncident;
    }

    public function setTypeIncident(string $typeIncident): self
    {
        $this->typeIncident = $typeIncident;

        return $this;
    }

    public function getIdAgentConcerned(): ?int
    {
        return $this->idAgentConcerned;
    }

    public function setIdAgentConcerned(int $idAgentConcerned): self
    {
        $this->idAgentConcerned = $idAgentConcerned;

        return $this;
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

    public function getLieuxIncident(): ?string
    {
        return $this->lieuxIncident;
    }

    public function setLieuxIncident(string $lieuxIncident): self
    {
        $this->lieuxIncident = $lieuxIncident;

        return $this;
    }
}