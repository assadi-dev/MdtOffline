<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PrisonRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PrisonRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 */
class Prison
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
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $idAgent;

    /**
     * @ORM\Column(type="integer",nullable=true)
     * @Groups({"read:civil:item"})
     */
    private $arrestReport;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $arrestFolder;

    /**
     * @ORM\OneToOne(targetEntity=ArrestFolder::class,inversedBy="prison", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $idArrestFolder;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class, inversedBy="prisons")
     */
    private $civil;

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


    public function getIdAgent(): ?int
    {
        return $this->idAgent;
    }

    public function setIdAgent(int $idAgent): self
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

    public function getIdArrestFolder(): ?ArrestFolder
    {
        return $this->idArrestFolder;
    }

    public function setIdArrestFolder(ArrestFolder $idArrestFolder): self
    {
        $this->idArrestFolder = $idArrestFolder;

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
}