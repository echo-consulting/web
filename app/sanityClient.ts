import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "pgq2pd26",
  dataset: "production",
  apiVersion: "2026-02-12",
  useCdn: true,
});
