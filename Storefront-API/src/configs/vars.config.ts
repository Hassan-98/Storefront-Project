import dotenv from 'dotenv';

dotenv.config();

const { 
  NODE_ENV,
  PORT,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  TEST_DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  JWT_SECRET,
  BCRYPT_SECRET,
  BCRYPT_SALT,
  ENV
 } = process.env;

export default {
  node_env: NODE_ENV,
  port: PORT,
  db: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    name: DATABASE_NAME,
    test_db: TEST_DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD
  },
  jwt_secret: JWT_SECRET,
  bcrypt: { 
    secret: BCRYPT_SECRET,
    salt: BCRYPT_SALT 
  },
  testingEnv: ENV
}