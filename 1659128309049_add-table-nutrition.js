/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE nutrition (
            id PRIMARY KEY,
            calories INTEGER NOT NULL,
            protein INTEGER NOT NULL, 
            fat INTEGER NOT NULL,
            carbs INTEGER NOT NULL,
            post_id FOREIGN KEY REFERENCES posts.id
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE nutrition
    `)
};
