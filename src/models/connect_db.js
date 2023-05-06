const { Pool } = require('pg');
require('dotenv').config();

const user_api = process.env.DB_API_USER;
const passwd_api = process.env.DB_API_PASSWD;

const user_site = process.env.DB_SITE_USER;
const passwd_site = process.env.DB_SITE_PASSWD;

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const DATABASE = process.env.DATABASE;


/*
    Usuário do banco exclusivo para fazer
    requisições
*/
const pool = new Pool({
    user: user_api,
    password: passwd_api,
    host: HOST,
    port: PORT,
    database: DATABASE
});

/*
    Usuário do banco exclusivo para adicionar
    novos participantes na tabela.
*/
const site_pool = new Pool({
    user: user_site,
    password: passwd_site,
    host: HOST,
    port: PORT,
    database: DATABASE
})

module.exports = {pool, site_pool};


