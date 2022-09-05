<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220905210623 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cellule ADD civil_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cellule ADD CONSTRAINT FK_F493DEDF84C1DE7E FOREIGN KEY (civil_id) REFERENCES civil (id)');
        $this->addSql('CREATE INDEX IDX_F493DEDF84C1DE7E ON cellule (civil_id)');
        $this->addSql('ALTER TABLE convocation ADD civil_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE convocation ADD CONSTRAINT FK_C03B3F5F84C1DE7E FOREIGN KEY (civil_id) REFERENCES civil (id)');
        $this->addSql('CREATE INDEX IDX_C03B3F5F84C1DE7E ON convocation (civil_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cellule DROP FOREIGN KEY FK_F493DEDF84C1DE7E');
        $this->addSql('DROP INDEX IDX_F493DEDF84C1DE7E ON cellule');
        $this->addSql('ALTER TABLE cellule DROP civil_id');
        $this->addSql('ALTER TABLE convocation DROP FOREIGN KEY FK_C03B3F5F84C1DE7E');
        $this->addSql('DROP INDEX IDX_C03B3F5F84C1DE7E ON convocation');
        $this->addSql('ALTER TABLE convocation DROP civil_id');
    }
}
