'use client';

import { useState } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Footer } from '@/components/ShellDashboard/Footer';
import { Header } from '@/components/ShellDashboard/Header/Header';
import { MainContent } from '@/components/ShellDashboard/MainContent';
import { Navbar } from '@/components/ShellDashboard/Navbar/Navbar';
import { TaskModal } from '@/components/Task/TaskModal';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop, open: openDesktop }] = useDisclosure(true);
  const [active, setActive] = useState('Home');

  return (
    <AppShell
      layout="alt"
      withBorder={false}
      transitionDuration={500}
      transitionTimingFunction="ease"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: desktopOpened ? 300 : 60,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: false },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header
          mobileOpened={mobileOpened}
          onToggleMobile={toggleMobile}
          onOpenDesktop={openDesktop}
          active={active}
        />
      </AppShell.Header>

      <AppShell.Navbar p="0" bg="transparent" zIndex={200}>
        <Navbar
          desktopOpened={!desktopOpened}
          onToggleDesktop={toggleDesktop}
          mobileOpened={mobileOpened}
          onToggleMobile={toggleMobile}
          active={active}
          onActiveChange={setActive}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <MainContent mobileOpened={mobileOpened}>{children}</MainContent>
      </AppShell.Main>

      {/* <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer> */}

      <TaskModal />
    </AppShell>
  );
}
