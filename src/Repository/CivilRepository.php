<?php

namespace App\Repository;

use App\Entity\Civil;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Civil>
 *
 * @method Civil|null find($id, $lockMode = null, $lockVersion = null)
 * @method Civil|null findOneBy(array $criteria, array $orderBy = null)
 * @method Civil[]    findAll()
 * @method Civil[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CivilRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Civil::class);
    }

    public function add(Civil $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Civil $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Civil[] Returns an array of Civil objects
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

    //    public function findOneBySomeField($value): ?Civil
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function search($searchTerm)
    {
        $qb =  $this->createQueryBuilder("c")->select();
        $qb->where($qb->expr()->like("c.nom", ":searchTerm"))
            ->orWhere($qb->expr()->like("c.prenom", ":searchTerm"))
            ->orWhere($qb->expr()->like("c.telephone", ":searchTerm"))
            ->orWhere($qb->expr()->like("c.affiliation", ":searchTerm"))
            ->orWhere($qb->expr()->like("c.nationalite", ":searchTerm"))
            ->setParameter("searchTerm", "%$searchTerm%");

        $result = $qb->getQuery()->getResult();
        return $result;
    }
}