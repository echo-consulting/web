import { Container, Title, Text, Stack, Box } from "@mantine/core";
import { BlogCard } from "~/components/blog-card";
import { blogPosts } from "~/data/blog-posts";

export function meta() {
  return [
    { title: "Blog - echo Consulting" },
    {
      name: "description",
      content: "Les våre artikler om konsulentvirksomhet, digitalisering og forretningsutvikling.",
    },
  ];
}

export default function Blog() {
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 pb-20">
        <Stack gap="xl">
          <div>
            <Title order={1} className="text-4xl font-bold text-white mb-4">
              Blog
            </Title>
            <Text size="lg" className="!text-white max-w-4xl">
              Innsikt, tips og tanker om konsulentvirksomhet, web-utvikling og alt annet
            </Text>
          </div>

          <Stack gap="lg" className="mt-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </Stack>

          {blogPosts.length === 0 && (
            <Box className="text-center py-12">
              <Text size="lg" className="text-gray-400">
                Ingen blogginnlegg ennå. Kom tilbake senere!
              </Text>
            </Box>
          )}
        </Stack>
      </Container>
    </div>
  );
}
