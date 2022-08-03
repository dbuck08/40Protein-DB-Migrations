/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE attachments (
            id PRIMARY KEY,
            type VARCHAR,
            title VARCHAR,
            description VARCHAR,
            uri VARCHAR,
            post_id FOREIGN KEY REFERENCES posts.id
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE attachments
    `)
};
