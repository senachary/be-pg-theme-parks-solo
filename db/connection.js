/**
 * Create your connection to the DB in this file
 * and remember to export it
 */

const { Pool } = require("pg");

if (!process.env.PGDATABASE) {
  throw new Error("no PGDATABASE env var");
}

const connection = new Pool();

module.exports = connection;
