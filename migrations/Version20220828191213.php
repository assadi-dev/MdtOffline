<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220828191213 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE avertissement ADD civil_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE avertissement ADD CONSTRAINT FK_8C10BF2684C1DE7E FOREIGN KEY (civil_id) REFERENCES civil (id)');
        $this->addSql('CREATE INDEX IDX_8C10BF2684C1DE7E ON avertissement (civil_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE avertissement DROP FOREIGN KEY FK_8C10BF2684C1DE7E');
        $this->addSql('DROP INDEX IDX_8C10BF2684C1DE7E ON avertissement');
        $this->addSql('ALTER TABLE avertissement DROP civil_id');
    }
}
