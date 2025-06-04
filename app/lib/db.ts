import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

export type Database = ReturnType<typeof intiDB>;

export const intiDB = (url: string, authToken: string) => {
  return drizzle({
    connection: {
      url,
      authToken,
    },
    schema,
  });
};
