/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE users (
            id PRIMARY KEY,
            username VARCHAR NOT NULL,
            real_name VARCHAR,
            birthdate DATE NOT NULL,
            email VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            avatar VARCHAR,
            join_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            moderator BOOLEAN,
            author BOOLEAN,
            coach BOOLEAN
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE users
    `)
};
