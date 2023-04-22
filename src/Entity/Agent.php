<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Repository\AgentRepository;
use App\Controller\UploadAgentController;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;


/**
 * @ORM\Entity(repositoryClass=AgentRepository::class)
 * @Vich\Uploadable()
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')",
 * normalizationContext={"groups"={"read:agent:collections","read:agent:item"}},
 * itemOperations={
 * "put","delete","get",
 *  "upload_photo_agent"={
 *      "method"="POST",
 *      "path"="/agents/{id}/photo",
 *      "deserialize"=false,
 *      "controller"=UploadAgentController::class,
 *      
 *  }
 * }
 * )
 * @UniqueEntity(fields="matricule", message="Ce numero matricule est déjà pris")
 * @UniqueEntity(fields="name", message="Ce Prénom et Nom est déjà pris")
 * @ApiFilter(SearchFilter::class, properties={"grade.nom" : "exact","name":"partial"})
 * 
 */
class Agent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:agent:collections","read:user:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"read:agent:collections","read:user:collections"})
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"read:agent:collections","read:user:collections"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true,unique=true)
     * @Groups({"read:agent:collections","read:user:collections"})
     */
    private $matricule;



    /**
     * @ORM\Column(type="datetime_immutable")
     * 
     * @Groups({"read:agent:collections","read:user:collections"})
     * 
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"read:agent:collections","read:user:collections"})
     */
    private $name;

    /**
     * @var File|null
     * @Vich\UploadableField(mapping="agents",fileNameProperty="photo")
     */
    private $file;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     * @Groups({"read:agent:collections","read:user:collections"})
     * @Gedmo\Timestampable(on="update")
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=PriseDeService::class, mappedBy="agent", orphanRemoval=true)
     * @groups({"read:agent:item"})
     */
    private $priseDeServices;

    /**
     * @ORM\ManyToOne(targetEntity=Grade::class, inversedBy="agents")
     * @Groups({"read:agent:collections","read:user:collections"})
     */
    private $grade;



    public function __construct()
    {

        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
        $this->priseDeServices = new ArrayCollection();
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

    /**
     * @return Collection<int, PriseDeService>
     */
    public function getPriseDeServices(): Collection
    {
        return $this->priseDeServices;
    }

    public function addPriseDeService(PriseDeService $priseDeService): self
    {
        if (!$this->priseDeServices->contains($priseDeService)) {
            $this->priseDeServices[] = $priseDeService;
            $priseDeService->setAgent($this);
        }

        return $this;
    }

    public function removePriseDeService(PriseDeService $priseDeService): self
    {
        if ($this->priseDeServices->removeElement($priseDeService)) {
            // set the owning side to null (unless already changed)
            if ($priseDeService->getAgent() === $this) {
                $priseDeService->setAgent(null);
            }
        }

        return $this;
    }

    public function getGrade(): ?Grade
    {
        return $this->grade;
    }

    public function setGrade(?Grade $grade): self
    {
        $this->grade = $grade;

        return $this;
    }
}