import {
  Container,
  Title,
  Button,
  TextInput,
  Textarea,
  Group,
  Grid,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { IoSend } from "react-icons/io5";
import { Form } from "react-router";
import type { Route } from "../routes/+types/contact";
import { useEffect } from "react";

export function ContactForm({
  actionData,
}: {
  actionData: Route.ComponentProps["actionData"];
}) {
  const form = useForm<{
    name: string;
    email: string;
    content: string;
  }>({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      content: "",
    },
    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      content: (value) =>
        value.trim().length > 0 ? null : "Message is required",
    },
  });

  useEffect(() => {
    if (actionData?.success === false) {
      showNotification({
        title: "❌ Noe gikk galt!",
        message: "Vennligst prøv igjen senere.",
        color: "red",
      });
    }

    if (actionData?.success === true) {
      showNotification({
        title: "✅ Meldingen din er sendt!",
        message: "Vi vil ta kontakt med deg så snart som mulig.",
        color: "green",
      });
      form.reset();
    }
  }, [actionData]);

  return (
    <Container className="text-white text-left">
      <Title
        order={1}
        className="text-5xl h-28 max-w-[25rem] font-bold pb-8 whitespace-pre-line"
      >
        Kontakt oss
      </Title>
      <Form method="post">
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              withAsterisk
              label="Navn"
              key={form.key("name")}
              name="name"
              {...form.getInputProps("name")}
              placeholder="Ola Nordmann"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              withAsterisk
              label="E-post"
              name="email"
              key={form.key("email")}
              {...form.getInputProps("email")}
              placeholder="ola.nordmann@firma.no"
            />
          </Grid.Col>
        </Grid>
        <Textarea
          label="Melding"
          key={form.key("content")}
          name="content"
          {...form.getInputProps("content")}
          __size=""
          autosize
          minRows={4}
          placeholder="Hei, echo Consulting! Jeg er interessert i deres konsulenttjenester og ønsker mer informasjon. Vennligst ta kontakt med meg!"
        />

        <Group justify="flex-end" mt="md">
          <Button
            leftSection={<IoSend />}
            color="blue"
            className="mt-8"
            type="submit"
          >
            Send
          </Button>
        </Group>
      </Form>
    </Container>
  );
}
