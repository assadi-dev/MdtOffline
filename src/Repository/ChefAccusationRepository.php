<?php

namespace App\Repository;

use App\Entity\ChefAccusation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ChefAccusation>
 *
 * @method ChefAccusation|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChefAccusation|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChefAccusation[]    findAll()
 * @method ChefAccusation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChefAccusationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChefAccusation::class);
    }

    public function add(ChefAccusation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ChefAccusation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ChefAccusation[] Returns an array of ChefAccusation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ChefAccusation
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
