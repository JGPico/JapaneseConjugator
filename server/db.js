const { Pool } = require('pg');
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'japaneseconjugator'
})

module.exports = pool;