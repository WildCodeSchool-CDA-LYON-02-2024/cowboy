DROP DATABASE IF EXISTS `cowboy`;

CREATE DATABASE IF NOT EXISTS `cowboy`;
USE `cowboy`;


-- Table `action_type`

CREATE TABLE IF NOT EXISTS `action_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
);


-- Table `action`

CREATE TABLE IF NOT EXISTS `action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `timestamp_end` DATE DEFAULT NULL,
  `action_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`action_type_id`) REFERENCES `action_type` (`id`)
);


-- Table `building_type`

CREATE TABLE IF NOT EXISTS `building_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- Table `player`

CREATE TABLE IF NOT EXISTS `player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(200) NULL DEFAULT NULL,
  `email` VARCHAR(250) NOT NULL UNIQUE,
  `password` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- Table `map`

CREATE TABLE IF NOT EXISTS `map` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slot` INT NULL DEFAULT NULL,
  `player_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`player_id`) REFERENCES `player` (`id`)
);


-- Table `colony`

CREATE TABLE IF NOT EXISTS `colony` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  `map_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`map_id`) REFERENCES `map` (`id`)
);


-- Table `building`

CREATE TABLE IF NOT EXISTS `building` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` INT NULL DEFAULT NULL,
  `building_type_id` INT NOT NULL,
  `colony_id` INT NOT NULL,
   `action_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`action_id`) REFERENCES `action` (`id`),
  FOREIGN KEY (`building_type_id`) REFERENCES `building_type` (`id`),
  FOREIGN KEY (`colony_id`) REFERENCES `colony` (`id`)
);


-- Table `expedition`

CREATE TABLE IF NOT EXISTS `expedition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `action_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`action_id`) REFERENCES `action` (`id`)
);


-- Table `cowboy`

CREATE TABLE IF NOT EXISTS `cowboy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  `expedition_id` INT NULL DEFAULT NULL,
  `colony_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`colony_id`) REFERENCES `colony` (`id`),
  FOREIGN KEY (`expedition_id`) REFERENCES `expedition` (`id`)
);


-- Table `resource_type`

CREATE TABLE IF NOT EXISTS `resource_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- Table `resource`

CREATE TABLE IF NOT EXISTS `resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL DEFAULT NULL,
  `resource_type_id` INT NOT NULL,
  `colony_id` INT NULL DEFAULT NULL,
  `map_id` INT  NULL DEFAULT NULL, 
  PRIMARY KEY (`id`),
  FOREIGN KEY (`colony_id`) REFERENCES `colony` (`id`),
  FOREIGN KEY (`resource_type_id`) REFERENCES `resource_type` (`id`),
  FOREIGN KEY (`map_id`) REFERENCES `map` (`id`)
);