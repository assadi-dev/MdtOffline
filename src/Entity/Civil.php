<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CivilRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CivilRepository::class)
 */
class Civil
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $birthday;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nationalite;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $affiliation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $emploie;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hairColor;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ethnie;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $permis;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $sexe;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $identification;

    /**
     * @ORM\OneToMany(targetEntity=Avertissement::class, mappedBy="civil")
     */
    private $avertissements;



    public function __construct()
    {

        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt =  new DateTime();
        $this->avertissements = new ArrayCollection();
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
}