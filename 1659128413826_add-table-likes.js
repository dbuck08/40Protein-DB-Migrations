/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE likes (
            author_id FOREIGN KEY REFERENCES users.id,
            post_id FOREIGN KEY REFERENCES posts.id,
            comment_id FOREIGN KEY REFERENCES comments.id
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE likes
    `)
};
