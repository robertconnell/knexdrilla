module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///knex_a'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
