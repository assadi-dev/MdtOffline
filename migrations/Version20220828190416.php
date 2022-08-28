<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220828190416 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE arrest_folder (id INT AUTO_INCREMENT NOT NULL, lieux VARCHAR(255) NOT NULL, entree_cellule VARCHAR(10) NOT NULL, infractions LONGTEXT NOT NULL, avocat TINYINT(1) NOT NULL, tentative TINYINT(1) NOT NULL, complicite TINYINT(1) NOT NULL, rapport LONGTEXT DEFAULT NULL, media VARCHAR(255) DEFAULT NULL, droit_miranda TINYINT(1) NOT NULL, soins TINYINT(1) NOT NULL, nourriture TINYINT(1) NOT NULL, is_enclose TINYINT(1) NOT NULL, enclosed_at DATETIME DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL, agent VARCHAR(255) NOT NULL, amend INT NOT NULL, peine VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE arrest_report (id INT AUTO_INCREMENT NOT NULL, lieux VARCHAR(255) NOT NULL, entree_cellule VARCHAR(255) NOT NULL, infractions LONGTEXT NOT NULL, tentative TINYINT(1) NOT NULL, complicite TINYINT(1) NOT NULL, quantite INT NOT NULL, amende INT NOT NULL, peine VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avertissement (id INT AUTO_INCREMENT NOT NULL, lieux VARCHAR(255) NOT NULL, comments LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL, agent VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE traffic_ticket (id INT AUTO_INCREMENT NOT NULL, infractions LONGTEXT NOT NULL, lieux LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, agent VARCHAR(255) NOT NULL, amend INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE arrest_folder');
        $this->addSql('DROP TABLE arrest_report');
        $this->addSql('DROP TABLE avertissement');
        $this->addSql('DROP TABLE traffic_ticket');
    }
}
