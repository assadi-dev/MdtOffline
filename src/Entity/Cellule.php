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
     * @ORM\ManyToOne(targetEntity=Civil::class, inversedBy="cellule")
     */
    private $civil;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $idAgent;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $arrestReport;

    /**
     * @ORM\Column(type="integer",nullable=true)
     * @Groups({"read:civil:item"})
     */
    private $arrestFolder;

    /**
     * @ORM\OneToOne(targetEntity=ArrestReport::class, inversedBy="cellule", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $idArrestReport;




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



    public function getArrestReport(): ?int
    {
        return $this->arrestReport;
    }

    public function setArrestReport(int $arrestReport): self
    {
        $this->arrestReport = $arrestReport;

        return $this;
    }

    public function getArrestFolder(): ?int
    {
        return $this->arrestFolder;
    }

    public function setArrestFolder(int $arrestFolder): self
    {
        $this->arrestFolder = $arrestFolder;

        return $this;
    }

    public function getIdArrestReport(): ?ArrestReport
    {
        return $this->idArrestReport;
    }

    public function setIdArrestReport(ArrestReport $idArrestReport): self
    {
        $this->idArrestReport = $idArrestReport;

        return $this;
    }
}