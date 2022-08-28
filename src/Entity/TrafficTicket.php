<?php

namespace App\Entity;

use App\Repository\TrafficTicketRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrafficTicketRepository::class)
 */
class TrafficTicket
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
    private $infractions;

    /**
     * @ORM\Column(type="text")
     */
    private $lieux;

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
    private $agent;

    /**
     * @ORM\Column(type="integer")
     */
    private $amend;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLieux(): ?string
    {
        return $this->lieux;
    }

    public function setLieux(string $lieux): self
    {
        $this->lieux = $lieux;

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

    public function getAgent(): ?string
    {
        return $this->agent;
    }

    public function setAgent(string $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function getAmend(): ?int
    {
        return $this->amend;
    }

    public function setAmend(int $amend): self
    {
        $this->amend = $amend;

        return $this;
    }
}
