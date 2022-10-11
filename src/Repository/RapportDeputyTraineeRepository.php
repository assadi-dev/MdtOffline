<?php

namespace App\Repository;

use App\Entity\RapportDeputyTrainee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RapportDeputyTrainee>
 *
 * @method RapportDeputyTrainee|null find($id, $lockMode = null, $lockVersion = null)
 * @method RapportDeputyTrainee|null findOneBy(array $criteria, array $orderBy = null)
 * @method RapportDeputyTrainee[]    findAll()
 * @method RapportDeputyTrainee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RapportDeputyTraineeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RapportDeputyTrainee::class);
    }

    public function add(RapportDeputyTrainee $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(RapportDeputyTrainee $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return RapportDeputyTrainee[] Returns an array of RapportDeputyTrainee objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RapportDeputyTrainee
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
