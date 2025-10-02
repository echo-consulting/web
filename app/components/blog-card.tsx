import { Card, Group, Badge, Title, Text, Stack } from "@mantine/core";
import { Link } from "react-router";
import type { BlogPostData } from "~/components/blog-post";

interface BlogCardProps {
  post: BlogPostData;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card 
      padding="xl" 
      radius="md" 
      className="border-3 border-gray-600 hover:border-gray-400 transition-colors duration-200 !bg-transparent"
    >
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <div className="flex-1">
            <Title order={2} className="text-2xl font-semibold text-white mb-3 transition-colors">
                {post.title}
            </Title>
            <Text className="!text-gray-300 leading-relaxed mb-4">
              {post.excerpt}
            </Text>
          </div>
        </Group>
        
        <Group className="flex justify-between items-end">
          <div className="flex gap-4">
            {post.category && (
              <Badge variant="outline" color="white" size="sm" className="border-2 rounded-full">
                {post.category}
              </Badge>
            )}

            <Text size="sm" className="!text-gray-200">
              {new Date(post.date).toLocaleDateString('no-NO', {
                year: 'numeric',
                month: 'long', 
                day: 'numeric'
              })}
            </Text>
          </div>
      
          <Link 
            to={`/blog/${post.slug}`}
            className="!text-gray-400 hover:!text-white font-medium transition-colors no-underline ml-auto"
          >
            Les mer →
          </Link>
        </Group>
      </Stack>
    </Card>
  );
}
