<?php

namespace App\Serializer;


use App\Entity\Civil;
use Vich\UploaderBundle\Storage\StorageInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareNormalizerInterface;

class CivilNormalizer implements ContextAwareNormalizerInterface, NormalizerAwareInterface


{
    use NormalizerAwareTrait;
    private const ALREADY_CALLED = 'AGENT_OBJECT_NORMALIZER_ALREADY_CALLED';

    private $storage;

    public function __construct(StorageInterface $storage)
    {
        $this->storage = $storage;
    }

    public function supportsNormalization($data, ?string $format = null, array $context = [])
    {
        if (isset($context[self::ALREADY_CALLED])) {
            return false;
        }

        return $data instanceof Civil;
    }

    /**
     * @param Civil $object
     */
    public function normalize($object, ?string $format = null, array $context = [])
    {
        $object->setPhoto($this->storage->resolveUri($object, "file"));
        $context[self::ALREADY_CALLED] = true;
        return $this->normalizer->normalize($object, $format, $context);
    }
}