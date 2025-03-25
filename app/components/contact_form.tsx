import { Container, Title, Button, TextInput, Textarea, Group, GridCol, Grid } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { IoSend } from "react-icons/io5";

export function ContactForm() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validate: {
            name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    });

    const handleSubmit = (values: { email: string; message: string }) => {
        {/* handle form data here */}
        console.log(values);
        showNotification({
            title: "✅ Meldingen din er sendt!",
            message: "Vi vil ta kontakt med deg så snart som mulig.",
            color: "green",
        });
    }

    return (
        <Container className="text-white text-left">
            
            <Title order={1} className="text-5xl h-28 max-w-[25rem] font-bold pb-8 whitespace-pre-line">
                Kontakt oss
            </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Grid>
                <Grid.Col span={6}>
                    <TextInput withAsterisk label="Navn" key={form.key("name")}{...form.getInputProps("name")} placeholder="Ola Nordmann"/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput withAsterisk label="E-post" key={form.key("email")}{...form.getInputProps("email")} placeholder="ola.nordmann@firma.no"/>
                </Grid.Col>
            </Grid>
            <Textarea label="Melding" key={form.key("message")}{...form.getInputProps("message")} __size="" autosize minRows={4} placeholder="Hei, Echo Consulting! Jeg er interessert i deres konsulenttjenester og ønsker mer informasjon. Vennligst ta kontakt med meg!"/>    
        
            <Group justify="flex-end" mt="md">
                <Button leftSection={<IoSend/>} color="blue" className="mt-8" type="submit">
                Send
                </Button>
            </Group>
        </form>
        
        </Container>
    );
}