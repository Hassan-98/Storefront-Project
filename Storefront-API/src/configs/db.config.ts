import { Pool } from 'pg';
import config from './vars.config';

//= Create Postgres Pool
const database = new Pool({
  user: config.db.user,
  host: config.db.host,
  database:
    config.testingEnv === 'testing'
      ? config.db.test_db
      : config.db.name,
  password: config.db.password,
  port: (config.db.port || 5432) as number,
});

export default database;
