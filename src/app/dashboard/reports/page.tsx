import type { Metadata } from 'next';
import PageMDX, { metadata as mdxMetadata } from '@/content/dashboard/reports.mdx';

export const metadata: Metadata = {
  title: mdxMetadata.title,
  description: mdxMetadata.description,
};

export default function Page() {
  return <PageMDX />;
}

