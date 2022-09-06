<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220905232401 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cellule ADD sortie DATETIME NOT NULL, DROP motif, CHANGE expiration entree DATETIME NOT NULL');
        $this->addSql('ALTER TABLE convocation ADD motif VARCHAR(255) NOT NULL, ADD expiration DATETIME NOT NULL, DROP entree, DROP sortie');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cellule ADD motif VARCHAR(255) NOT NULL, ADD expiration DATETIME NOT NULL, DROP entree, DROP sortie');
        $this->addSql('ALTER TABLE convocation ADD sortie DATETIME NOT NULL, DROP motif, CHANGE expiration entree DATETIME NOT NULL');
    }
}
