<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RapportDeputyTraineeRepository;
use DateTime;
use DateTimeImmutable;

/**
 * @ORM\Entity(repositoryClass=RapportDeputyTraineeRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 */
class RapportDeputyTrainee
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
    private $deputyTrainyConcerned;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datePatrouille;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $typePatrouille;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $rapport;

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
     *  @Gedmo\Timestampable(on="update")
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

    public function getDeputyTrainyConcerned(): ?string
    {
        return $this->deputyTrainyConcerned;
    }

    public function setDeputyTrainyConcerned(string $deputyTrainyConcerned): self
    {
        $this->deputyTrainyConcerned = $deputyTrainyConcerned;

        return $this;
    }

    public function getDatePatrouille(): ?\DateTimeInterface
    {
        return $this->datePatrouille;
    }

    public function setDatePatrouille(\DateTimeInterface $datePatrouille): self
    {
        $this->datePatrouille = $datePatrouille;

        return $this;
    }

    public function getTypePatrouille(): ?string
    {
        return $this->typePatrouille;
    }

    public function setTypePatrouille(?string $typePatrouille): self
    {
        $this->typePatrouille = $typePatrouille;

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
}