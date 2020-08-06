const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "benosambinu",
    database: "todo_database",
    port: 5432
});
module.exports = pool;