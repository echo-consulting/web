import type { Route } from "./+types/contact";
import { ContactForm } from "~/components/contact-form";
import { BackgroundImage, Container } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { createContact } from "~/lib/queries/insert";
import { intiDB } from "~/lib/db";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "echo Consulting" },
    {
      name: "description",
      content: "Konsulenttjenester som ikke koster skjorta.",
    },
  ];
}

export default function Contact({ actionData }: Route.ComponentProps) {
  return (
    <div className="relative min-h-screen">
      {/* BackgroundImage as a separate, absolute element */}
      <BackgroundImage
        src="/heightmap_contours.png"
        radius="sm"
        className="absolute inset-0 h-full w-full opacity-50" // Opacity here
      />
      {/* Content layered above */}
      <Notifications position="top-center" zIndex={1000} />
      <Container className="relative z-10 pt-48">
        <ContactForm actionData={actionData} />
      </Container>
    </div>
  );
}

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");

  const db = intiDB(
    context.cloudflare.env.TURSO_DATABASE_URL,
    context.cloudflare.env.TURSO_DATABASE_AUTH_TOKEN
  );

  await createContact(db, {
    name: name as string,
    email: email as string,
    content: content as string,
  });

  return {
    success: true,
  };
}
