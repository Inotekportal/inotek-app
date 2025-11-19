import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';

type ParamsType = Promise<{ slug: string }>;

type PostMetadata = {
  title?: string;
  description?: string;
  date?: string;
};

type MDXPostModule = {
  default: React.ComponentType;
  metadata?: PostMetadata;
};

function getPostSlugs(): string[] {
  const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

  return fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

async function getPostModule(slug: string): Promise<MDXPostModule> {
  return (await import(`@/content/posts/${slug}.mdx`)) as MDXPostModule;
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: ParamsType }) {
  const { slug } = await params;
  const { default: Post } = await getPostModule(slug);

  return <Post />;
}

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
  const { slug } = await params;
  const { metadata = {} } = await getPostModule(slug);

  return {
    title: metadata.title ?? 'Blog Post',
    description: metadata.description ?? '',
    openGraph: {
      title: metadata.title ?? 'Blog Post',
      description: metadata.description ?? '',
      type: 'article',
      publishedTime: metadata.date,
    },
  };
}
