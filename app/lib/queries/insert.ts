import type { Database } from "../db";
import { contactTable, type InsertContact } from "../schema";

export async function createContact(db: Database, data: InsertContact) {
  await db.insert(contactTable).values(data);
}
