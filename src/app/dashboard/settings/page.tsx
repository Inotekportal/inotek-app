import type { Metadata } from 'next';
import PageMDX, { metadata as mdxMetadata } from '@/content/dashboard/settings.mdx';

export const metadata: Metadata = {
  title: mdxMetadata.title,
  description: mdxMetadata.description,
};

export default function Page() {
  return <PageMDX />;
}

