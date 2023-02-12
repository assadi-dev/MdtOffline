<?php

namespace App\Entity;

use DateTime;
use DateInterval;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ForgottenPasswordRepository;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;


/**
 * @ApiResource()
 * @ApiFilter(OrderFilter::class, properties= {"createdAt":"DESC"})
 * @ORM\Entity(repositoryClass=ForgottenPasswordRepository::class)
 */
class ForgottenPassword
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $userId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $token;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private $link;

    /**
     * @ORM\Column(type="datetime_immutable",nullable=true)
     */
    private $expirateAt;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;


    public function __construct()
    {
        $dt =  new DateTimeImmutable();
        $this->createdAt =  $dt;
        $this->expirateAt =   $dt->add(new DateInterval("P1D"));
    } 



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?int
    {
        return $this->userId;
    }

    public function setUserId(int $userId): self
    {
        $this->userId = $userId;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getExpirateAt(): ?\DateTimeImmutable
    {
        return $this->expirateAt;
    }

    public function setExpirateAt(\DateTimeImmutable $expirateAt): self
    {
        $this->expirateAt = $expirateAt;

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
}