import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contactTable = sqliteTable("contact_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  content: text().notNull(),
});

export type InsertContact = typeof contactTable.$inferInsert;
export type SelectContact = typeof contactTable.$inferSelect;