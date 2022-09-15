<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AgentRepository;
use App\Controller\UploadAgentController;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


/**
 * @ORM\Entity(repositoryClass=AgentRepository::class)
 * @Vich\Uploadable()
 * @ApiResource(
 * normalizationContext={"groups"={"read:agent:collections","read:agent:item"}},
 * itemOperations={
 * "put","delete","get",
 *  "upload_photo"={
 *      "method"="POST",
 *      "path"="/agent/{id}/photo",
 *      "deserialize"=false,
 *      "controller"=UploadAgentController::class,
 *      
 *  }
 * }
 * )
 */
class Agent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:agent:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:user:collections"})
     * @Groups({"read:agent:collections"})
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:user:collections"})
     * @Groups({"read:agent:collections"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:user:collections"})
     * @Groups({"read:agent:collections"})
     */
    private $matricule;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:user:collections"})
     * @Groups({"read:agent:collections"})
     */
    private $grade;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:user:collections"})
     * @Groups({"read:agent:collections"})
     * 
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:user:collections"})
     * @Groups({"read:agent:collections"})
     */
    private $name;

    /**
     * @var File|null
     * @Vich\UploadableField(mapping="agents",fileNameProperty="photo")
     */
    private $file;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     * @Groups({"read:agent:collections"})
     */
    private $updatedAt;



    public function __construct()
    {
        $this->grade = "Rookie";
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getMatricule(): ?string
    {
        return $this->matricule;
    }

    public function setMatricule(?string $matricule): self
    {
        $this->matricule = $matricule;

        return $this;
    }

    public function getGrade(): ?string
    {
        return $this->grade;
    }

    public function setGrade(string $grade): self
    {
        $this->grade = $grade;

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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of file
     *
     * @return  File|null
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * Set the value of file
     *
     * @param  File|null  $file
     *
     * @return  self
     */
    public function setFile($file)
    {
        $this->file = $file;

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
}