import type { Metadata } from 'next';
import PageMDX, { metadata as mdxMetadata } from '@/content/dashboard/countries.mdx';

export const metadata: Metadata = {
  title: mdxMetadata.title,
  description: mdxMetadata.description,
};

export default function Page() {
  return <PageMDX />;
}
