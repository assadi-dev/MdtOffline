<?php

namespace App\Entity;



use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use App\Controller\OwnerController;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ApiResource(
 * 
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
 * 
 * 
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface, JWTUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true,nullable=false)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string",nullable=false)
     */
    private $password;

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


        return new self(
            $username,
            $payload['roles'], // Added by default

        );
    }
}