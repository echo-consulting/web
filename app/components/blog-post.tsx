import { Container, Title, Text, Stack, Badge, Group } from "@mantine/core";
import { Link } from "react-router";

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category?: string;
  slug: string;
}

interface BlogPostProps {
  post: BlogPostData;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 pb-20 max-w-4xl">
        <Stack gap="xl">
          {/* Back link */}
          <Link 
            to="/blog" 
            className="!text-gray-400 hover:!text-white transition-colors no-underline"
          >
            ← Tilbake til blog
          </Link>

          {/* Article header */}
          <div>
            <Group gap="sm" className="mb-4">
              {post.category && (
                <Badge variant="outline" color="white" size="sm" className="border-2 rounded-full">
                  {post.category}
                </Badge>
              )}
              <Text size="sm" className="!text-gray-400">
                {new Date(post.date).toLocaleDateString('no-NO', {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </Text>
            </Group>

            <Title order={1} className="text-4xl font-bold text-white mb-4">
              {post.title}
            </Title>

            <Text size="lg" className="!text-gray-300 leading-relaxed">
              {post.excerpt}
            </Text>
          </div>

          {/* Article content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.split('\n').map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold text-white mt-8 mb-4">${line.slice(2)}</h1>`;
                  } else if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-semibold text-white mt-6 mb-3">${line.slice(3)}</h2>`;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return `<p class="font-semibold text-white mt-4 mb-2">${line.slice(2, -2)}</p>`;
                  } else if (line.startsWith('*') && line.endsWith('*')) {
                    return `<p class="italic text-gray-400 mt-6 text-center border-t border-gray-700 pt-6">${line.slice(1, -1)}</p>`;
                  } else if (line.startsWith('---')) {
                    return '<hr class="border-gray-700 my-8">';
                  } else if (line.trim()) {
                    return `<p class="mb-4">${line}</p>`;
                  }
                  return '<br>';
                }).join('')
              }}
            />
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export function BlogPostNotFound() {
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 pb-20">
        <Stack gap="xl">
          <Title order={1} className="text-4xl font-bold text-white">
            Fant ikke blogginnlegget
          </Title>
          <Text className="!text-gray-300">
            Beklager, vi kunne ikke finne blogginnlegget du leter etter.
          </Text>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
            ← Tilbake til blog
          </Link>
        </Stack>
      </Container>
    </div>
  );
}
