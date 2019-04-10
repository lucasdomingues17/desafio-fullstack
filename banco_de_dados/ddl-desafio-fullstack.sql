-- DROP DATABASE IF EXISTS `desafio-fullstack`;

CREATE DATABASE `desafio-fullstack`;

USE `desafio-fullstack`;

CREATE TABLE IF NOT EXISTS  `usuario`(	
	`id` int(11) NOT NULL AUTO_INCREMENT,    
    `uuid` char(36) NOT NULL,
	`nome` varchar(128) NOT NULL,    
	`email` varchar (64) NOT NULL,    
	`password_hash` varchar(255) NOT NULL,
    `created_at` datetime NOT NULL,	
    `updated_at` datetime NOT NULL,
   
	 PRIMARY KEY (`id`),     
     UNIQUE KEY `email` (`email`),
     UNIQUE KEY `uuid` (`uuid`)
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS  `sala`(	
	`id` int(11) NOT NULL AUTO_INCREMENT,    
    `uuid` char(36) NOT NULL,
	`nome` varchar(128) NOT NULL,    	
    `created_at` datetime NOT NULL,	
    `updated_at` datetime NOT NULL,
   
	 PRIMARY KEY (`id`),
     UNIQUE KEY `uuid` (`uuid`)
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `professor`(	
	`id` int(11) NOT NULL AUTO_INCREMENT,    
    `uuid` char(36) NOT NULL,
	`nome` varchar(128) NOT NULL,    	
    `created_at` datetime NOT NULL,	
    `updated_at` datetime NOT NULL,
   
	 PRIMARY KEY (`id`),
     UNIQUE KEY `uuid` (`uuid`)
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `curso`(	
	`id` int(11) NOT NULL AUTO_INCREMENT,    
    `uuid` char(36) NOT NULL,
	`nome` varchar(128) NOT NULL,    	    
	`horario_inicio` time NOT NULL,
	`horario_fim` time NOT NULL,
    `created_at` datetime NOT NULL,	
    `updated_at` datetime NOT NULL,
   
	 PRIMARY KEY (`id`),
     UNIQUE KEY `uuid` (`uuid`)
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `curso_sala`(	
    `curso_id` int(11) NOT NULL,
    `sala_id` int(11) NOT NULL, 	
    `created_at` datetime NOT NULL,	
    `updated_at` datetime NOT NULL,
   
	PRIMARY KEY (`curso_id`,`sala_id`),
    KEY `FK_curso_sala` (`sala_id`),
	CONSTRAINT `FK_curso_sala_curso` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`) ON DELETE CASCADE,
	CONSTRAINT `FK_curso_sala_sala` FOREIGN KEY (`sala_id`) REFERENCES `sala` (`id`) 
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `curso_professor`(	
    `curso_id` int(10) NOT NULL,
	`professor_id` int(10) NOT NULL,
	`created_at` timestamp NULL DEFAULT NULL,
	`updated_at` timestamp NULL DEFAULT NULL,
	PRIMARY KEY (`curso_id`,`professor_id`),
	KEY `FK_curso_professor` (`professor_id`),
	CONSTRAINT `FK_curso_professor_curso` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`) ON DELETE CASCADE,
	CONSTRAINT `FK_curso_professor_professor` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`) 
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

DROP USER IF EXISTS 'user_desafio_fullstack'@'localhost';
CREATE USER 'user_desafio_fullstack'@'localhost' IDENTIFIED BY 'D3s4f10_full5t4ck@2019';
GRANT SELECT, UPDATE, DELETE, INSERT ON `desafio-fullstack`.* to 'user_desafio_fullstack'@'localhost'
