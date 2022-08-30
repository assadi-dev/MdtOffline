<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CivilRepository;
use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * 
 * @ApiResource(normalizationContext={"groups"={"read:civil:collections","read:civil:item"}},
 * 
 * itemOperations={
 *       "delete",
 *       "put",
 *       "get" = { "normalization_context"={
 *                      "groups" ={"read:civil:collections", "read:civil:item"},
 *                      }
 *              }
 * }
 * 
 * )
 * @ORM\Entity(repositoryClass=CivilRepository::class)
 */
class Civil
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:civil:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:collections"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:collections"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item"})
     */
    private $birthday;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:collections"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item"})
     */
    private $nationalite;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item"})
     */
    private $affiliation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:civil:item"})
     */
    private $emploie;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:civil:item"})
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:civil:collections"})
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item"})
     */
    private $hairColor;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item"})
     */
    private $ethnie;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:civil:item"})
     */
    private $permis;

    /**
     * @ORM\Column(type="string", length=25)
     * @Groups({"read:civil:item"})
     */
    private $sexe;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:civil:item"})
     */
    private $createdAt;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:civil:item"})
     */
    private $identification;

    /**
     * @ORM\OneToMany(targetEntity=Avertissement::class, mappedBy="civil")
     * @Groups({"read:civil:item"})
     */
    private $avertissements;

    /**
     * @ORM\OneToMany(targetEntity=Traffic::class, mappedBy="civil")
     * @Groups({"read:civil:item"})
     */
    private $traffics;

    /**
     * @ORM\OneToMany(targetEntity=ArrestFolder::class, mappedBy="civil")
     * @Groups({"read:civil:item"})
     */
    private $dossierArrestation;

    /**
     * @ORM\OneToMany(targetEntity=ArrestReport::class, mappedBy="civil")
     * @Groups({"read:civil:item"})
     */
    private $rapportArrestation;




    public function __construct()
    {

        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt =  new DateTime();
        $this->avertissements = new ArrayCollection();
        $this->traffics = new ArrayCollection();
        $this->dossierArrestation = new ArrayCollection();
        $this->rapportArrestation = new ArrayCollection();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getBirthday(): ?string
    {
        return $this->birthday;
    }

    public function setBirthday(string $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getNationalite(): ?string
    {
        return $this->nationalite;
    }

    public function setNationalite(string $nationalite): self
    {
        $this->nationalite = $nationalite;

        return $this;
    }

    public function getAffiliation(): ?string
    {
        return $this->affiliation;
    }

    public function setAffiliation(string $affiliation): self
    {
        $this->affiliation = $affiliation;

        return $this;
    }

    public function getEmploie(): ?string
    {
        return $this->emploie;
    }

    public function setEmploie(?string $emploie): self
    {
        $this->emploie = $emploie;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
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

    public function getHairColor(): ?string
    {
        return $this->hairColor;
    }

    public function setHairColor(string $hairColor): self
    {
        $this->hairColor = $hairColor;

        return $this;
    }

    public function getEthnie(): ?string
    {
        return $this->ethnie;
    }

    public function setEthnie(string $ethnie): self
    {
        $this->ethnie = $ethnie;

        return $this;
    }

    public function getPermis(): ?string
    {
        return $this->permis;
    }

    public function setPermis(string $permis): self
    {
        $this->permis = $permis;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): self
    {
        $this->sexe = $sexe;

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

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getIdentification(): ?string
    {
        return $this->identification;
    }

    public function setIdentification(?string $identification): self
    {
        $this->identification = $identification;

        return $this;
    }

    /**
     * @return Collection<int, Avertissement>
     */
    public function getAvertissements(): Collection
    {
        return $this->avertissements;
    }

    public function addAvertissement(Avertissement $avertissement): self
    {
        if (!$this->avertissements->contains($avertissement)) {
            $this->avertissements[] = $avertissement;
            $avertissement->setCivil($this);
        }

        return $this;
    }

    public function removeAvertissement(Avertissement $avertissement): self
    {
        if ($this->avertissements->removeElement($avertissement)) {
            // set the owning side to null (unless already changed)
            if ($avertissement->getCivil() === $this) {
                $avertissement->setCivil(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Traffic>
     */
    public function getTraffics(): Collection
    {
        return $this->traffics;
    }

    public function addTraffic(Traffic $traffic): self
    {
        if (!$this->traffics->contains($traffic)) {
            $this->traffics[] = $traffic;
            $traffic->setCivil($this);
        }

        return $this;
    }

    public function removeTraffic(Traffic $traffic): self
    {
        if ($this->traffics->removeElement($traffic)) {
            // set the owning side to null (unless already changed)
            if ($traffic->getCivil() === $this) {
                $traffic->setCivil(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ArrestFolder>
     */
    public function getDossierArrestation(): Collection
    {
        return $this->dossierArrestation;
    }

    public function addDossierArrestation(ArrestFolder $dossierArrestation): self
    {
        if (!$this->dossierArrestation->contains($dossierArrestation)) {
            $this->dossierArrestation[] = $dossierArrestation;
            $dossierArrestation->setCivil($this);
        }

        return $this;
    }

    public function removeDossierArrestation(ArrestFolder $dossierArrestation): self
    {
        if ($this->dossierArrestation->removeElement($dossierArrestation)) {
            // set the owning side to null (unless already changed)
            if ($dossierArrestation->getCivil() === $this) {
                $dossierArrestation->setCivil(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ArrestReport>
     */
    public function getRapportArrestation(): Collection
    {
        return $this->rapportArrestation;
    }

    public function addRapportArrestation(ArrestReport $rapportArrestation): self
    {
        if (!$this->rapportArrestation->contains($rapportArrestation)) {
            $this->rapportArrestation[] = $rapportArrestation;
            $rapportArrestation->setCivil($this);
        }

        return $this;
    }

    public function removeRapporTArrestation(ArrestReport $rapportArrestation): self
    {
        if ($this->rapportArrestation->removeElement($rapportArrestation)) {
            // set the owning side to null (unless already changed)
            if ($rapportArrestation->getCivil() === $this) {
                $rapportArrestation->setCivil(null);
            }
        }

        return $this;
    }
}
