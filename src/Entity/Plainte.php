<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PlainteRepository;
use Gedmo\Mapping\Annotation as Gedmo;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;

/**
 * @ORM\Entity(repositoryClass=PlainteRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 * @ApiFilter(OrderFilter::class, properties= {"createdAt":"DESC"})
 */
class Plainte
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
    private $nomDepositaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $telephoneDepositaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomIncrimine;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $telephoneIncrimine;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $raisonDepot;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $corpsPlainte;

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



    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomDepositaire(): ?string
    {
        return $this->nomDepositaire;
    }

    public function setNomDepositaire(string $nomDepositaire): self
    {
        $this->nomDepositaire = $nomDepositaire;

        return $this;
    }

    public function getTelephoneDepositaire(): ?string
    {
        return $this->telephoneDepositaire;
    }

    public function setTelephoneDepositaire(string $telephoneDepositaire): self
    {
        $this->telephoneDepositaire = $telephoneDepositaire;

        return $this;
    }

    public function getNomIncrimine(): ?string
    {
        return $this->nomIncrimine;
    }

    public function setNomIncrimine(string $nomIncrimine): self
    {
        $this->nomIncrimine = $nomIncrimine;

        return $this;
    }

    public function getTelephoneIncrimine(): ?string
    {
        return $this->telephoneIncrimine;
    }

    public function setTelephoneIncrimine(string $telephoneIncrimine): self
    {
        $this->telephoneIncrimine = $telephoneIncrimine;

        return $this;
    }

    public function getRaisonDepot(): ?string
    {
        return $this->raisonDepot;
    }

    public function setRaisonDepot(?string $raisonDepot): self
    {
        $this->raisonDepot = $raisonDepot;

        return $this;
    }

    public function getCorpsPlainte(): ?string
    {
        return $this->corpsPlainte;
    }

    public function setCorpsPlainte(?string $corpsPlainte): self
    {
        $this->corpsPlainte = $corpsPlainte;

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