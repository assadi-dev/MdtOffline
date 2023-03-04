<?php

namespace App\Repository;

use App\Entity\DemandeComptabilite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DemandeComptabilite>
 *
 * @method DemandeComptabilite|null find($id, $lockMode = null, $lockVersion = null)
 * @method DemandeComptabilite|null findOneBy(array $criteria, array $orderBy = null)
 * @method DemandeComptabilite[]    findAll()
 * @method DemandeComptabilite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DemandeComptabiliteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DemandeComptabilite::class);
    }

    public function add(DemandeComptabilite $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DemandeComptabilite $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return DemandeComptabilite[] Returns an array of DemandeComptabilite objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DemandeComptabilite
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
