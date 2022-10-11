<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RapportDeputyTraineeRepository;

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
    private $datePatroulle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $typePatroulle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $rapport;

    /**
     * @ORM\Column(type="integer")
     */
    private $idAgent;

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

    public function getDatePatroulle(): ?\DateTimeInterface
    {
        return $this->datePatroulle;
    }

    public function setDatePatroulle(\DateTimeInterface $datePatroulle): self
    {
        $this->datePatroulle = $datePatroulle;

        return $this;
    }

    public function getTypePatroulle(): ?string
    {
        return $this->typePatroulle;
    }

    public function setTypePatroulle(?string $typePatroulle): self
    {
        $this->typePatroulle = $typePatroulle;

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
}