import { Container, Title, Button, Text, Box, TextInput, Textarea, Group } from "@mantine/core";
import { Notifications, showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";

export function ContactForm() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            message: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    });

    const handleSubmit = (values: { email: string; message: string }) => {
        console.log(values);
        showNotification({
            title: "✅ Meldingen din er sendt!",
            message: "Sjekk inboxen din, du skal motta en bekreftelse på e-post snart.",
            color: "green",
        });
    }

    return (
        <Container className="text-white text-left">
            
            <Title order={1} className="text-5xl h-28 max-w-[25rem] font-bold pb-8 whitespace-pre-line">
                Kontakt oss
            </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput withAsterisk label="E-post" key={form.key("email")}{...form.getInputProps("email")} placeholder="ola.nordmann@firma.no"/>
            <Textarea label="Melding" key={form.key("message")}{...form.getInputProps("message")} __size="" autosize minRows={4} placeholder="Hei, Echo Consulting! Jeg er interessert i deres konsulenttjenester og ønsker mer informasjon. Vennligst ta kontakt med meg!"/>    
        
            <Group justify="flex-end" mt="md">
                <Button color="blue" className="mt-8" type="submit">
                Send
                </Button>
            </Group>
        </form>
        
        </Container>
    );
}