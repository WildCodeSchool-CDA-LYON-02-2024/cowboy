-- -- Insert players
-- -- INSERT INTO `player` (`username`, `email`, `password`)
-- -- VALUES
-- --   ('player1', 'player1@example.com', 'password1'),
-- --   ('player2', 'player2@example.com', 'password2'),
-- --   ('player3', 'player3@example.com', 'password3'),
-- --   ('player4', 'player4@example.com', 'password4'),
-- --   ('player5', 'player5@example.com', 'password5'),
-- --   ('player6', 'player6@example.com', 'password6'),
-- --   ('player7', 'player7@example.com', 'password7'),
-- --   ('player8', 'player8@example.com', 'password8'),
-- --   ('player9', 'player9@example.com', 'password9'),
-- --   ('player10', 'player10@example.com', 'password10');

-- Insert cowboys
INSERT INTO `cowboy` (`name`, `player_ID`)
VALUES
  ('Wyatt Earp', null),
  ('Billy the Kid', null),
  ('Doc Holliday', null),
  ('Jesse James', null),
  ('Butch Cassidy', null),
  ('Sundance Kid', null),
  ('Wild Bill Hickok', null),
  ('Pat Garrett', null),
  ('Buffalo Bill', null),
  ('Kit Carson', null),
  ('Curly Bill', NULL),
  ('Clay Allison', NULL),
  ('John Wesley Hardin', NULL),
  ('Luke Short', NULL),
  ('Bat Masterson', NULL),
  ('Kid Curry', NULL),
  ('Frank James', NULL),
  ('Tom Horn', NULL),
  ('Joaquin Murrieta', NULL),
  ('King Fisher', NULL),
  ('Black Bart', NULL),
  ('Sam Bass', NULL),
  ('Harry Tracy', NULL),
  ('Longhair Jim', NULL),
  ('Dave Rudabaugh', NULL);

-- -- Insert resource types
-- INSERT INTO `resource_type` (`id`, `name`)
-- VALUES
-- (1, 'or'),
-- (2, 'argent'),
-- (3, 'bois'),
-- (4, 'fer'),
-- (5, 'charbon'),
-- (6, 'eau'),
-- (7, 'bétail'),
-- (8, 'cuir'),
-- (9, 'maïs'),
-- (10, 'blé');

-- -- Insert resources
-- INSERT INTO `resource` (`id`, `quantity`, `resource_type_id`)
-- VALUES
-- (1, 100, 1),
-- (2, 100, 2),
-- (3, 100, 3),
-- (4, 100, 4),
-- (5, 100, 5),
-- (6, 100, 6),
-- (7, 100, 7),
-- (8, 100, 8),
-- (9, 100, 9),
-- (10, 100, 10);


-- -- insert into player_resource 

-- INSERT INTO `player_resource` (`player_ID`, `resource_ID`, `quantity`)
-- VALUES
-- (1, 1, 50),
-- (1, 2, 30),
-- (1, 3, 40),
-- (1, 4, 25),
-- (1, 5, 35),
-- (2, 1, 20),
-- (2, 2, 15),
-- (3, 1, 10),
-- (3, 4, 50),
-- (1, 10, 3);
