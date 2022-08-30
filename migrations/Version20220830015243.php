<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220830015243 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE arrest_folder DROP tentative, DROP complicite');
        $this->addSql('ALTER TABLE arrest_report DROP tentative, DROP complicite, DROP quantite');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE arrest_folder ADD tentative TINYINT(1) NOT NULL, ADD complicite TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE arrest_report ADD tentative TINYINT(1) NOT NULL, ADD complicite TINYINT(1) NOT NULL, ADD quantite INT NOT NULL');
    }
}
