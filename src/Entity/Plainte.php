<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PlainteRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=PlainteRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
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
    private $telephoneIncriminé;

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

    public function getTelephoneIncriminé(): ?string
    {
        return $this->telephoneIncriminé;
    }

    public function setTelephoneIncriminé(string $telephoneIncriminé): self
    {
        $this->telephoneIncriminé = $telephoneIncriminé;

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
}