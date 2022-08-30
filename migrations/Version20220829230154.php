<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220829230154 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE traffic (id INT AUTO_INCREMENT NOT NULL, civil_id INT DEFAULT NULL, infractions JSON DEFAULT NULL, lieux LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, agent VARCHAR(255) NOT NULL, amend INT NOT NULL, chef_accusations JSON DEFAULT NULL, INDEX IDX_5560263084C1DE7E (civil_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE traffic ADD CONSTRAINT FK_5560263084C1DE7E FOREIGN KEY (civil_id) REFERENCES civil (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE traffic DROP FOREIGN KEY FK_5560263084C1DE7E');
        $this->addSql('DROP TABLE traffic');
    }
}
