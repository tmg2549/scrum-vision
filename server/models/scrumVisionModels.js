const { Pool } = require('pg');

const PG_URI = 'postgres://vudxqnes:ZKgKwygetSUiSGXK9vxOQDLswR321dfq@castor.db.elephantsql.com/vudxqnes';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
