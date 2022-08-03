/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE posts (
            id PRIMARY KEY,
            author_id FOREIGN KEY REFERENCES users.id,
            title VARCHAR NOT NULL,
            content VARCHAR NOT NULL,
            thumbnail VARCHAR,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE posts
    `)
};
