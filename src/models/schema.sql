CREATE DATABASE IF NOT EXISTS `devconnect`;

USE `devconnect`;

CREATE TABLE IF NOT EXISTS `accounts` (
    `firstName` VARCHAR(24) NOT NULL,
    `lastName` VARCHAR(24) NOT NULL,
    `email` VARCHAR(64) PRIMARY KEY NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `type` VARCHAR(24) NOT NULL,
    `business_name` VARCHAR(36) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `jobs` (
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(64) NOT NULL,
    `body` VARCHAR(512) NOT NULL,
    `compensation` INTEGER NOT NULL
);

