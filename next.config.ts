import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';
import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/notifications',
      '@mantine/form',
    ],
  },
};

const withMDX = mdx({ extension: /\.(md|mdx)$/ });

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(withMDX(nextConfig));
