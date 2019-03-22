USE `desafio-fullstack`;

INSERT INTO `desafio-fullstack`.`sala` 
	(`uuid`, `nome`, `created_at`, `updated_at`)
	VALUES
		(UUID(), '101', NOW(), NOW()), -- 1
		(UUID(), '102', NOW(), NOW()), -- 2
        (UUID(), '103', NOW(), NOW()), -- 3
		(UUID(), '201', NOW(), NOW()), -- 4
		(UUID(), '202', NOW(), NOW()), -- 5
        (UUID(), '203', NOW(), NOW()), -- 6
		(UUID(), '301', NOW(), NOW()), -- 7
		(UUID(), '302', NOW(), NOW()), -- 8
        (UUID(), '303', NOW(), NOW()), -- 9
		(UUID(), '401', NOW(), NOW()), -- 10
		(UUID(), '402', NOW(), NOW()), -- 11
        (UUID(), '403', NOW(), NOW()), -- 12
		(UUID(), '501', NOW(), NOW()), -- 13
		(UUID(), '502', NOW(), NOW()), -- 14
        (UUID(), '503', NOW(), NOW()); -- 15


INSERT INTO `desafio-fullstack`.`professor`
	(`uuid`, `nome`, `created_at`, `updated_at`)
		VALUES
			(UUID(), 'Álvares de Azevedo', NOW(), NOW()),  -- 1
            (UUID(), 'Mario de andrade', NOW(), NOW()),    -- 2
            (UUID(), 'Ruy Barbosa', NOW(), NOW()),         -- 3
            (UUID(), 'Agatha Christie', NOW(), NOW()),     -- 4
            (UUID(), 'Mário Quintana', NOW(), NOW());      -- 5


INSERT INTO `desafio-fullstack`.`curso`
	(`uuid`, `nome`, `horario_inicio`,`horario_fim`,`created_at`,`updated_at`)
		VALUES
			(UUID(), 'Biologia', '09:00:00', '12:00:00', NOW(), NOW()),
            (UUID(), 'Gestão', '09:30:00', '12:30:00', NOW(), NOW()),
            (UUID(), 'História', '14:45:00', '18:00:00', NOW(), NOW()),
            (UUID(), 'Matemática', '14:45:00', '18:00:00', NOW(), NOW()),
            (UUID(), 'Desenvolvimento Web', '07:00:00', '09:30:00', NOW(), NOW());

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

INSERT INTO `desafio-fullstack`.`usuario`
	(`uuid`, `nome`, `email`, `password_hash`, `created_at`, `updated_at`)
		VALUES 
			(UUID(), 'Lucas Domingues', 'lucasdomingues.web@gmail.com', '$2a$08$ZuZvWMmUH2cfoR06bqKozOhz8OGo8qn.JhJVrn9m.JPhGU6gKEmN6', NOW(), NOW()),
            (UUID(), 'Leonardo Geranio', 'leonardo.geranio@gmail.com', '$2a$08$90Cj4.dgH2O9rTga1S6VOOCtkb8CUd8PRsKALf3Inqrw6fq3XErF.', NOW(), NOW()),
            (UUID(), 'Celsolisboa', 'celsolisboa@celsolisboa.com', '$2a$08$LLOUuJnPQ7vhpxIFh1pB/O3GWs9jCxbJCCMmmSE6ZSieGjh80hZzy', NOW(), NOW()),
            (UUID(), 'Coordenador Acadêmico','coordenador@celsolisboa.com','$2a$08$ZhxLcGA.8ih0w4lqPqBGx.kfTL8uCXgPRWI5fBVwi53HUypi/M0r6', NOW(), NOW());
