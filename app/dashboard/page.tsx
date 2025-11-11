'use client';

import { AppShell, Box, Flex } from '@mantine/core';
import { CardGradient } from '@/components/CardGradient/CardGradient';
import { FeaturesAsymmetrical } from '@/components/FeaturesAsymmetrical/FeaturesAsymmetrical';
import { HeaderSearch } from '@/components/HeaderSearch/HeaderSearch';
import { TableReviews } from '@/components/TableReview/TableReviews';
import { NavbarSimple } from '../../components/NavbarSimple/NavbarSimple';
import { FooterSimple } from '../../components/SimpleFooter/FooterSimple';

export default function DashboardPage() {
  return (
    <>
      <AppShell
        padding="md"
        layout="default"
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm' }}
      >
        <AppShell.Header>
          <HeaderSearch />
        </AppShell.Header>

        <AppShell.Navbar>
          <NavbarSimple />
        </AppShell.Navbar>

        <AppShell.Main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Box mb="md" p="md">
            <FeaturesAsymmetrical />
            <TableReviews />
            <Flex direction="row" mt="xl" gap="md">
              <CardGradient />
              <CardGradient />
              <CardGradient />
              <CardGradient />
            </Flex>
          </Box>
          <FooterSimple />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
