const { parks, rides, stalls } = require("./data/index.js");
const format = require("pg-format");
const db = require("./connection");

function seed() {
  return db
    .query("DROP TABLE IF EXISTS rides;")
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls_foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS parks;");
    })
    .then(() => {
      return createParks();
    });
}

function createParks() {
  /* Create your parks table in the query below */
  const createParksTable = `
  CREATE TABLE parks(
    park_id SERIAL PRIMARY KEY,
      park_name VARCHAR NOT NULL,
      year_opened INT NOT NULL,
      annual_attendance INT NOT NULL
  );`;
  return db.query(createParksTable);
}

module.exports = seed;
