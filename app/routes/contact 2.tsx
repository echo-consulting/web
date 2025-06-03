import type { Route } from "./+types/home";
import { ContactForm} from "~/components/contact_form";
import { BackgroundImage, Container } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "echo Consulting" },
    {
      name: "description",
      content: "Konsulenttjenester som ikke koster skjorta.",
    },
  ];
}

export default function Contact() {
    return (
      <div className="relative min-h-screen">
        {/* BackgroundImage as a separate, absolute element */}
        <BackgroundImage
          src="/heightmap_contours.png"
          radius="sm"
          className="absolute inset-0 h-full w-full opacity-50" // Opacity here
        />
        {/* Content layered above */}
        <Notifications position="top-center" zIndex={1000}/>
        <Container className="relative z-10 pt-48">
            
            <ContactForm/>
        </Container>
      </div>
    );
}