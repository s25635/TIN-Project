CREATE TABLE IF NOT EXISTS users (
                                     id SERIAL PRIMARY KEY,
                                     username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS roles (
                                     id SERIAL PRIMARY KEY,
                                     name VARCHAR(50) NOT NULL UNIQUE
    );

CREATE TABLE IF NOT EXISTS user_roles (
                                          id SERIAL PRIMARY KEY,
                                          user_id INTEGER REFERENCES users(id),
    role_id INTEGER REFERENCES roles(id),
    expiration_date TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS movies (
                                      id SERIAL PRIMARY KEY,
                                      title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    release_year INTEGER NOT NULL
    );

CREATE TABLE IF NOT EXISTS user_movies (
                                           id SERIAL PRIMARY KEY,
                                           user_id INTEGER REFERENCES users(id),
    movie_id INTEGER REFERENCES movies(id)
    );