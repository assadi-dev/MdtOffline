<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DispatchManagerRepository;

/**
 * @ORM\Entity(repositoryClass=DispatchManagerRepository::class)
 * @ApiResource(security="is_granted('IS_AUTHENTICATED_FULLY')")
 */
class DispatchManager
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $currentState = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $lastState = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCurrentState(): ?array
    {
        return $this->currentState;
    }

    public function setCurrentState(?array $currentState): self
    {
        $this->currentState = $currentState;

        return $this;
    }

    public function getLastState(): ?array
    {
        return $this->lastState;
    }

    public function setLastState(?array $lastState): self
    {
        $this->lastState = $lastState;

        return $this;
    }
}
