CREATE DATABASE IF NOT EXISTS `devconnect`;

USE `devconnect`;

CREATE TABLE IF NOT EXISTS `accounts` (
    `email` VARCHAR(64) PRIMARY KEY NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `type` VARCHAR(24) NOT NULL
)