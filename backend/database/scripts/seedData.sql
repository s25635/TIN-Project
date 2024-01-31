INSERT INTO users (username, email, password) VALUES
                                                  ('admin', 'admin@example.com', 'admin_password'),
                                                  ('user1', 'user1@example.com', 'user1_password'),
                                                  ('user2', 'user2@example.com', 'user2_password');

INSERT INTO roles (name) VALUES
                             ('admin'),
                             ('user');

INSERT INTO user_roles (user_id, role_id) VALUES
                                              (1, 1),
                                              (2, 2),
                                              (3, 2);

INSERT INTO movies (title, genre, release_year) VALUES
                                                    ('Inception', 'Sci-Fi', 2010),
                                                    ('The Shawshank Redemption', 'Drama', 1994),
                                                    ('The Dark Knight', 'Action', 2008);

INSERT INTO user_movies (user_id, movie_id) VALUES
                                                (2, 1),
                                                (2, 3),
                                                (3, 2);
