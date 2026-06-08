import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
   host: process.env.DB_HOSTNAME,
   port: process.env.DB_PORT,
   user: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE
})

const query = `
SELECT *
FROM posts`;

const result = await connection.query(query)
console.log(result);


await connection.end();



