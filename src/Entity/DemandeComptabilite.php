<?php

namespace App\Entity;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DemandeComptabiliteRepository;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;


/**
 * @ORM\Entity(repositoryClass=DemandeComptabiliteRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 * @ApiFilter(OrderFilter::class, properties= {"createdAt":"DESC"})
 */
class DemandeComptabilite
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
    private $date;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $montant;

    /**
     * @ORM\Column(type="text")
     */
    private $raison;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;


    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->date = new DateTimeImmutable();
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

    public function getDate(): ?\DateTimeImmutable
    {
        return $this->date;
    }

    public function setDate(\DateTimeImmutable $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getMontant(): ?string
    {
        return $this->montant;
    }

    public function setMontant(string $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getRaison(): ?string
    {
        return $this->raison;
    }

    public function setRaison(string $raison): self
    {
        $this->raison = $raison;

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