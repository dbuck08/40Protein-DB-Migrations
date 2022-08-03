/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE comments (
            id PRIMARY KEY,
            content VARCHAR NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            post_id FOREIGN KEY REFERENCES posts.id,
            author_id FOREIGN KEY REFERENCES users.id
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE comments
    `)
};
