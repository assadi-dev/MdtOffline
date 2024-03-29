<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Repository\ArrestFolderRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')" ,normalizationContext={"groups"={"read:arrestFolder:collections","read:arrestFolder:item"}}  )
 * @ORM\Entity(repositoryClass=ArrestFolderRepository::class)
 */
class ArrestFolder
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item","read:arrestFolder:collections","read:arrestReport:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $lieux;

    /**
     * @ORM\Column(type="string", length=10)
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $entreeCellule;

    /**
     * @ORM\Column(type="json",nullable=true)
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $infractions = [];

    /**
     * @ORM\Column(type="boolean",nullable=true)
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $avocat;


    /**
     * @ORM\Column(type="text", nullable=true)
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $rapport;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $media;

    /**
     * @ORM\Column(type="boolean")
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $droitMiranda;

    /**
     * @ORM\Column(type="boolean")
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $soins;

    /**
     * @ORM\Column(type="boolean")
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $nourriture;

    /**
     * @ORM\Column(type="boolean")
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $isEnclose;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $enclosedAt;

    /**
     * @ORM\Column(type="datetime_immutable")
     *@Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $createdAt;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=25)
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $amende;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     */
    private $peine;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class, inversedBy="dossierArrestation")
     * @Groups({"read:arrestFolder:collections"})
     */
    private $civil;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item","read:arrestFolder:collections"})
     * 
     */
    private $idAgent;

    /**
     * @ORM\OneToOne(targetEntity=ArrestReport::class, mappedBy="arrestFolder", cascade={"persist", "remove"})
     * @Groups({"read:arrestFolder:collections"})
     */
    private $arrestReport;


    /**
     * @ORM\OneToOne(targetEntity=Prison::class, mappedBy="idArrestFolder", cascade={"persist", "remove"})
     */
    private $prison;











    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
    }


    public function getId(): ?int
    {
        return $this->id;
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

    public function getEntreeCellule(): ?string
    {
        return $this->entreeCellule;
    }

    public function setEntreeCellule(string $entreeCellule): self
    {
        $this->entreeCellule = $entreeCellule;

        return $this;
    }

    public function getInfractions(): ?array
    {
        return $this->infractions;
    }

    public function setInfractions(array $infractions): self
    {
        $this->infractions = $infractions;

        return $this;
    }

    public function isAvocat(): ?bool
    {
        return $this->avocat;
    }

    public function setAvocat(bool $avocat): self
    {
        $this->avocat = $avocat;

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

    public function getMedia(): ?string
    {
        return $this->media;
    }

    public function setMedia(?string $media): self
    {
        $this->media = $media;

        return $this;
    }

    public function isDroitMiranda(): ?bool
    {
        return $this->droitMiranda;
    }

    public function setDroitMiranda(bool $droitMiranda): self
    {
        $this->droitMiranda = $droitMiranda;

        return $this;
    }

    public function isSoins(): ?bool
    {
        return $this->soins;
    }

    public function setSoins(bool $soins): self
    {
        $this->soins = $soins;

        return $this;
    }

    public function isNourriture(): ?bool
    {
        return $this->nourriture;
    }

    public function setNourriture(bool $nourriture): self
    {
        $this->nourriture = $nourriture;

        return $this;
    }

    public function isIsEnclose(): ?bool
    {
        return $this->isEnclose;
    }

    public function setIsEnclose(bool $isEnclose): self
    {
        $this->isEnclose = $isEnclose;

        return $this;
    }

    public function getEnclosedAt(): ?\DateTimeInterface
    {
        return $this->enclosedAt;
    }

    public function setEnclosedAt(?\DateTimeInterface $enclosedAt): self
    {
        $this->enclosedAt = $enclosedAt;

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

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAmende(): ?int
    {
        return $this->amende;
    }

    public function setAmende(int $amende): self
    {
        $this->amende = $amende;

        return $this;
    }

    public function getPeine(): ?string
    {
        return $this->peine;
    }

    public function setPeine(string $peine): self
    {
        $this->peine = $peine;

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

    public function getArrestReport(): ?ArrestReport
    {
        return $this->arrestReport;
    }

    public function setArrestReport(?ArrestReport $arrestReport): self
    {
        // unset the owning side of the relation if necessary
        if ($arrestReport === null && $this->arrestReport !== null) {
            $this->arrestReport->setArrestFolder(null);
        }

        // set the owning side of the relation if necessary
        if ($arrestReport !== null && $arrestReport->getArrestFolder() !== $this) {
            $arrestReport->setArrestFolder($this);
        }

        $this->arrestReport = $arrestReport;

        return $this;
    }

    public function getPrison(): ?Prison
    {
        return $this->prison;
    }

    public function setCellule(Prison $prison): self
    {
        // set the owning side of the relation if necessary
        if ($prison->getIdArrestFolder() !== $this) {
            $prison->setIdArrestFolder($this);
        }

        $this->$prison = $prison;

        return $this;
    }
}