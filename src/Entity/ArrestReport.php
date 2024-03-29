<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Repository\ArrestReportRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ArrestReportRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')",normalizationContext={"groups"={"read:arrestReport:collections","read:arrestReport:item"}})
 */
class ArrestReport
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item","read:arrestReport:collections","read:arrestFolder:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item","read:arrestReport:collections"})
     */
    private $lieux;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item","read:arrestReport:collections"})
     */
    private $entreeCellule;

    /**
     * @ORM\Column(type="json",nullable=true)
     * @Groups({"read:civil:item","read:arrestReport:collections"})
     */
    private $infractions = [];


    /**
     * @ORM\Column(type="string", length=25)
     * @Groups({"read:civil:item","read:arrestReport:collections","read:arrestFolder:item"})
     */
    private $amende;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item","read:arrestReport:collections","read:arrestFolder:item"})
     */
    private $peine;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:civil:item","read:arrestReport:collections"})
     */
    private $createdAt;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
     * 
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class, inversedBy="rapporArrestation")
     *
     * 
     */
    private $civil;


    /**
     * @ORM\Column(type="boolean")
     * @Groups({"read:civil:item","read:arrestReport:collections"})
     * 
     */
    private $conversionUp;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item","read:arrestReport:collections","read:arrestFolder:item"})
     */
    private $idAgent;

    /**
     * @ORM\OneToOne(targetEntity=ArrestFolder::class, inversedBy="arrestReport", cascade={"persist", "remove"})
     * @Groups({"read:civil:item"})
     * 
     * 
     */
    private $arrestFolder;

    /**
     * @ORM\OneToOne(targetEntity=Cellule::class, mappedBy="idArrestReport", cascade={"persist", "remove"})
     */
    private $cellule;







    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
        $this->conversionUp = false;
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

    public function getCivil(): ?Civil
    {
        return $this->civil;
    }

    public function setCivil(?Civil $civil): self
    {
        $this->civil = $civil;

        return $this;
    }


    public function isConversionUp(): ?bool
    {
        return $this->conversionUp;
    }

    public function setConversionUp(bool $conversionUp): self
    {
        $this->conversionUp = $conversionUp;

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

    public function getArrestFolder(): ?ArrestFolder
    {
        return $this->arrestFolder;
    }

    public function setArrestFolder(?ArrestFolder $arrestFolder): self
    {
        $this->arrestFolder = $arrestFolder;

        return $this;
    }

    public function getCellule(): ?Cellule
    {
        return $this->cellule;
    }

    public function setCellule(Cellule $cellule): self
    {
        // set the owning side of the relation if necessary
        if ($cellule->getIdArrestReport() !== $this) {
            $cellule->setIdArrestReport($this);
        }

        $this->cellule = $cellule;

        return $this;
    }
}