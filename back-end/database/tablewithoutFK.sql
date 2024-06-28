-- Drop schema if exists and create new schema
DROP SCHEMA IF EXISTS `cowboy`;
CREATE SCHEMA IF NOT EXISTS `cowboy` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `cowboy`;

-- Table `player`
CREATE TABLE IF NOT EXISTS `player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(200) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `map`
CREATE TABLE IF NOT EXISTS `map` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slot` INT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `colony`
CREATE TABLE IF NOT EXISTS `colony` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `map_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `action_type`
CREATE TABLE IF NOT EXISTS `action_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `action`
CREATE TABLE IF NOT EXISTS `action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `timestamp_end` DATE NULL,
  `action_type_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `expedition`
CREATE TABLE IF NOT EXISTS `expedition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `action_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `cowboy`
CREATE TABLE IF NOT EXISTS `cowboy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `player_ID` INT NULL,
  FOREIGN KEY (`player_ID`)
    REFERENCES `player` (`id`),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `resource_type`
CREATE TABLE IF NOT EXISTS `resource_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `resource`
CREATE TABLE IF NOT EXISTS `resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `resource_type_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `building_type`
CREATE TABLE IF NOT EXISTS `building_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Table `building`
CREATE TABLE IF NOT EXISTS `building` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` INT NULL,
  `building_type_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;



-- table player-resource

CREATE TABLE `player_resource` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `player_ID` INT NOT NULL,
    `resource_ID` INT NOT NULL,
    `quantity` INT NOT NULL,
    PRIMARY KEY (`id`)
);