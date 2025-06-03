import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

config({ path: '.dev.vars'});

// You can specify any property from the libsql connection options
export const db = drizzle({ 
  connection: { 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
  }
});
