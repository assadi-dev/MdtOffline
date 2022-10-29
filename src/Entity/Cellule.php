<?php

namespace App\Entity;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CelluleRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 * @ORM\Entity(repositoryClass=CelluleRepository::class)
 */
class Cellule
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"read:civil:item"})
     */
    private $entree;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"read:civil:item"})
     */
    private $sortie;



    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:civil:item"})
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class, inversedBy="convocation")
     */
    private $civil;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $idAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroDossier;




    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntree(): ?\DateTimeInterface
    {
        return $this->entree;
    }

    public function setEntree(\DateTimeInterface $entree): self
    {
        $this->entree = $entree;

        return $this;
    }

    public function getSortie(): ?\DateTimeInterface
    {
        return $this->sortie;
    }

    public function setSortie(\DateTimeInterface $sortie): self
    {
        $this->sortie = $sortie;

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

    public function getCivil(): ?Civil
    {
        return $this->civil;
    }

    public function setCivil(?Civil $civil): self
    {
        $this->civil = $civil;

        return $this;
    }

    public function getIdAgent(): ?string
    {
        return $this->idAgent;
    }

    public function setIdAgent(string $idAgent): self
    {
        $this->idAgent = $idAgent;

        return $this;
    }

    public function getNumeroDossier(): ?string
    {
        return $this->numeroDossier;
    }

    public function setNumeroDossier(string $numeroDossier): self
    {
        $this->numeroDossier = $numeroDossier;

        return $this;
    }
}