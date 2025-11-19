declare module '*.mdx' {
  import type { ComponentType } from 'react';

  interface MDXMetadata {
    title?: string;
    description?: string;
    date?: string;
    [key: string]: unknown;
  }

  export const metadata: MDXMetadata;
  const Component: ComponentType;
  export default Component;
}

