<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Repository\TrafficRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use DateTime;
use DateTimeImmutable;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * 
 * @ORM\Entity(repositoryClass=TrafficRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 */
class Traffic
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:item"})
     */
    private $id;

    /**
     * @ORM\Column(type="json", nullable=true)
     * @Groups({"read:civil:item"})
     */
    private $infractions = [];

    /**
     * @ORM\Column(type="text")
     * @Groups({"read:civil:item"})
     */
    private $lieux;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:civil:item"})
     */
    private $createdAt;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;



    /**
     * @ORM\Column(type="string", length=25)
     * @Groups({"read:civil:item"})
     */
    private $amende;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class, inversedBy="traffics")
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
        $this->updatedAt = new DateTime();
    }



    public function getId(): ?int
    {
        return $this->id;
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


    public function getAmende(): ?int
    {
        return $this->amende;
    }

    public function setAmende(int $amende): self
    {
        $this->amende = $amende;

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