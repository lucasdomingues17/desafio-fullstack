USE `desafio-fullstack`;

INSERT INTO `desafio-fullstack`.`sala` 
	(`nome`, `created_at`, `updated_at`)
	VALUES
		('101', NOW(), NOW()), -- 1
		('102', NOW(), NOW()), -- 2
        ('103', NOW(), NOW()), -- 3
		('201', NOW(), NOW()), -- 4
		('202', NOW(), NOW()), -- 5
        ('203', NOW(), NOW()), -- 6
		('301', NOW(), NOW()), -- 7
		('302', NOW(), NOW()), -- 8
        ('303', NOW(), NOW()), -- 9
		('401', NOW(), NOW()), -- 10
		('402', NOW(), NOW()), -- 11
        ('403', NOW(), NOW()), -- 12
		('501', NOW(), NOW()), -- 13
		('502', NOW(), NOW()), -- 14
        ('503', NOW(), NOW()); -- 15


INSERT INTO `desafio-fullstack`.`professor`
	(`nome`, `created_at`, `updated_at`)
		VALUES
			('Álvares de Azevedo', NOW(), NOW()),  -- 1
            ('Mario de andrade', NOW(), NOW()),    -- 2
            ('Ruy Barbosa', NOW(), NOW()),         -- 3
            ('Agatha Christie', NOW(), NOW()),     -- 4
            ('Mário Quintana', NOW(), NOW());      -- 5


INSERT INTO `desafio-fullstack`.`curso`
	(`nome`,`horario_inicio`,`horario_fim`,`created_at`,`updated_at`)
		VALUES
			('Biologia', '09:00:00', '12:00:00', NOW(), NOW()),
            ('Gestão', '09:30:00', '12:30:00', NOW(), NOW()),
            ('História', '14:45:00', '18:00:00', NOW(), NOW()),
            ('Matemática', '14:45:00', '18:00:00', NOW(), NOW()),
            ('Desenvolvimento Web', '07:00:00', '09:30:00', NOW(), NOW());

INSERT INTO `desafio-fullstack`.`curso_professor`
	(`curso_id`,`professor_id`,`created_at`,`updated_at`)
		VALUES			
            (1, 1, NOW(), NOW()),
            (2, 2, NOW(), NOW()),
            (3, 3, NOW(), NOW()),
            (3, 4, NOW(), NOW()),
            (4, 5, NOW(), NOW()),
            (5, 1, NOW(), NOW()),
            (5, 2, NOW(), NOW());


INSERT INTO `desafio-fullstack`.`curso_sala`
	(`curso_id`, `sala_id`, `created_at`, `updated_at`)
		VALUES
			(1, 14, NOW(), NOW()),
            (2, 7, NOW(), NOW()),
            (3, 11, NOW(), NOW()),
            (4, 8, NOW(), NOW()),
            (4, 9, NOW(), NOW()),
            (5, 1, NOW(), NOW()),
            (5, 2, NOW(), NOW());
