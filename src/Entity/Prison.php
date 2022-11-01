<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PrisonRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
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
     * @ORM\ManyToMany(targetEntity=Civil::class, inversedBy="prisons")
     */
    private $civil;

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
     * @ORM\OneToOne(targetEntity=ArrestFolder::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $idArrestFolder;

    public function __construct()
    {
        $this->civil = new ArrayCollection();
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

    /**
     * @return Collection<int, Civil>
     */
    public function getCivil(): Collection
    {
        return $this->civil;
    }

    public function addCivil(Civil $civil): self
    {
        if (!$this->civil->contains($civil)) {
            $this->civil[] = $civil;
        }

        return $this;
    }

    public function removeCivil(Civil $civil): self
    {
        $this->civil->removeElement($civil);

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
}