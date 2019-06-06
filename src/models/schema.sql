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

CREATE TABLE IF NOT EXISTS `profile` (
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `body` VARCHAR(512) NOT NULL,
    `skills` VARCHAR(512) NOT NULL,
    `image` VARCHAR(255),
    `firstName` VARCHAR(25) NOT NULL,
    `lastInitial` VARCHAR(1) NOT NULL,
    `city` VARCHAR(25) NOT NULL,
    `state` VARCHAR(2) NOT NULL,
    `email` VARCHAR(25) NOT NULL,
    `phone` VARCHAR(10) NOT NULL,
    `indeed` VARCHAR(255) NOT NULL,
    `github` VARCHAR(255) NOT NULL,
    `yearStarted` VARCHAR(4) NOT NULL
);

CREATE TABLE IF NOT EXISTS `messages` (
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(512) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `date` VARCHAR(20) NOT NULL,
    `message` VARCHAR(512) NOT NULL
);


