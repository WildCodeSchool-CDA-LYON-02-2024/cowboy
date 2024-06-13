-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cowboy
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `cowboy` ;

-- -----------------------------------------------------
-- Schema cowboy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cowboy` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `cowboy` ;

-- -----------------------------------------------------
-- Table `cowboy`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(200) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`map`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`map` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slot` INT NULL,
  `player_id` INT NOT NULL,
  PRIMARY KEY (`id`, `player_id`),
  UNIQUE INDEX `slot_UNIQUE` (`slot` ASC) VISIBLE,
  INDEX `fk_map_player_idx` (`player_id` ASC) VISIBLE,
  CONSTRAINT `fk_map_player`
    FOREIGN KEY (`player_id`)
    REFERENCES `cowboy`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`colony`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`colony` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `map_id` INT NOT NULL,
  PRIMARY KEY (`id`, `map_id`),
  INDEX `fk_colony_map1_idx` (`map_id` ASC) VISIBLE,
  CONSTRAINT `fk_colony_map1`
    FOREIGN KEY (`map_id`)
    REFERENCES `cowboy`.`map` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`action_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`action_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `timestamp_end` DATE NULL,
  `action_type_id` INT NOT NULL,
  PRIMARY KEY (`id`, `action_type_id`),
  INDEX `fk_action_action_type1_idx` (`action_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_action_action_type1`
    FOREIGN KEY (`action_type_id`)
    REFERENCES `cowboy`.`action_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`expedition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`expedition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `action_id` INT NOT NULL,
  PRIMARY KEY (`id`, `action_id`),
  INDEX `fk_expedition_action1_idx` (`action_id` ASC) VISIBLE,
  CONSTRAINT `fk_expedition_action1`
    FOREIGN KEY (`action_id`)
    REFERENCES `cowboy`.`action` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`cowboy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`cowboy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `expedition_id` INT NOT NULL,
  `colony_id` INT NOT NULL,
  PRIMARY KEY (`id`, `expedition_id`, `colony_id`),
  INDEX `fk_cowboy_expedition1_idx` (`expedition_id` ASC) VISIBLE,
  INDEX `fk_cowboy_colony1_idx` (`colony_id` ASC) VISIBLE,
  CONSTRAINT `fk_cowboy_expedition1`
    FOREIGN KEY (`expedition_id`)
    REFERENCES `cowboy`.`expedition` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cowboy_colony1`
    FOREIGN KEY (`colony_id`)
    REFERENCES `cowboy`.`colony` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`resource_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`resource_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`resource`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `resource_type_id` INT NOT NULL,
  `colony_id` INT NOT NULL,
  PRIMARY KEY (`id`, `resource_type_id`, `colony_id`),
  INDEX `fk_resource_resource_type1_idx` (`resource_type_id` ASC) VISIBLE,
  INDEX `fk_resource_colony1_idx` (`colony_id` ASC) VISIBLE,
  CONSTRAINT `fk_resource_resource_type1`
    FOREIGN KEY (`resource_type_id`)
    REFERENCES `cowboy`.`resource_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resource_colony1`
    FOREIGN KEY (`colony_id`)
    REFERENCES `cowboy`.`colony` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`building_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`building_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cowboy`.`building`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowboy`.`building` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` INT NULL,
  `building_type_id` INT NOT NULL,
  `colony_id` INT NOT NULL,
  `action_id` INT NOT NULL,
  PRIMARY KEY (`id`, `building_type_id`, `colony_id`, `action_id`),
  INDEX `fk_building_building_type1_idx` (`building_type_id` ASC) VISIBLE,
  INDEX `fk_building_colony1_idx` (`colony_id` ASC) VISIBLE,
  INDEX `fk_building_action1_idx` (`action_id` ASC) VISIBLE,
  CONSTRAINT `fk_building_building_type1`
    FOREIGN KEY (`building_type_id`)
    REFERENCES `cowboy`.`building_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_building_colony1`
    FOREIGN KEY (`colony_id`)
    REFERENCES `cowboy`.`colony` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_building_action1`
    FOREIGN KEY (`action_id`)
    REFERENCES `cowboy`.`action` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
