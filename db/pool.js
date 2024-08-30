const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://postgres:LUGgQjQpJyJKepdRqVoQIUlBwCaajcSo@meticulous-empathy.railway.internal:5432/railway`,
});
