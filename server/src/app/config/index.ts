import dotenv from 'dotenv';
import path from 'path';

// Load .env or .env.test depending on NODE_ENV
dotenv.config({
  path: path.join(process.cwd(), process.env.NODE_ENV === 'test' ? '.env.test' : '.env'),
});

export default {
  port: process.env.PORT || 3000,
  db_url: process.env.MONGODB_URI,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
