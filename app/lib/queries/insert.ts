
import { db } from '../db';
import { contactTable, type InsertContact } from '../schema';

export async function createUser(data: InsertContact) {
  await db.insert(contactTable).values(data);
}
