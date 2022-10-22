<?php

namespace App\Entity;



use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use App\Controller\OwnerController;
use Gedmo\Mapping\Annotation as Gedmo;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ApiResource(
 * 
 * normalizationContext={"groups"={"read:user:collections","read:user:item"}},
 * collectionOperations={
 * "get"={"security"="is_granted('IS_AUTHENTICATED_FULLY')","openapi_context" = {"security"={{"bearerAuth"={}}}}},
 * "post",

 * },
 * itemOperations={
 *  "get"={"security"="is_granted('IS_AUTHENTICATED_FULLY')","openapi_context" = {"security"={{"bearerAuth"={}}}}},
 * "put"={"security"="is_granted('IS_AUTHENTICATED_FULLY')","openapi_context" = {"security"={{"bearerAuth"={}}}}},
 * "delete"={"security"="is_granted('IS_AUTHENTICATED_FULLY')","openapi_context" = {"security"={{"bearerAuth"={}}}}}
 *  
 * },
 * )
 * @UniqueEntity(fields={"username"}, message="Cette identifiant est déjà pris")
 * 
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface, JWTUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:user:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true,nullable=false)
     * @Groups({"read:user:collections"})
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     * @Groups({"read:user:collections"})
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string",nullable=false)
     */
    private $password;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"read:user:collections"})
     */
    private $validate;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:user:collections"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Gedmo\Timestampable(on="update")
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=Agent::class, cascade={"persist", "remove"})
     * @Groups({"read:user:collections"})
     */
    private $agent;





    public function __construct()
    {
        $this->validate = false;
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTime();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }


    public static function createFromPayload($username, array $payload)
    {

        if (isset($payload['roles'])) {
            return new self($username, (array) $payload['roles']);
        }
        return new self($username);
    }

    public function isValidate(): ?bool
    {
        return $this->validate;
    }

    public function setValidate(bool $validate): self
    {
        $this->validate = $validate;

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

    public function getAgent(): ?Agent
    {
        return $this->agent;
    }

    public function setAgent(?Agent $agent): self
    {
        $this->agent = $agent;

        return $this;
    }
}