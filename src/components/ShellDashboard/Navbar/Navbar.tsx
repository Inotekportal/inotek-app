'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconBrandDatabricks,
  IconChevronLeft,
  IconChevronRight,
  IconDrone,
  IconGauge,
  IconReport,
  IconSettings,
  IconUser,
  IconUsersGroup,
  IconWorldPin,
} from '@tabler/icons-react';
import { ActionIcon, Anchor, Burger, Group, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './Navbar.module.css';

export const linksMockdata = [
  { icon: IconGauge, label: 'Dashboard', slug: '/dashboard', group: 'main' },
  { icon: IconReport, label: 'Reports', slug: '/dashboard/reports', group: 'main' },
  { icon: IconWorldPin, label: 'Countries', slug: '/dashboard/countries', group: 'main' },
  { icon: IconUsersGroup, label: 'Customers', slug: '/dashboard/customers', group: 'main' },
  { icon: IconBrandDatabricks, label: 'Projects', slug: '/dashboard/projects', group: 'main' },
  { icon: IconDrone, label: 'Dron Operators', slug: '/dashboard/operators', group: 'main' },
  { icon: IconUser, label: 'Users', slug: '/dashboard/users', group: 'main' },
  { icon: IconSettings, label: 'Settings', slug: '/dashboard/settings', group: 'settings' },
];

interface DoubleNavbarProps {
  desktopOpened?: boolean;
  onToggleDesktop?: () => void;
  mobileOpened?: boolean;
  onToggleMobile?: () => void;
  active: string;
  onActiveChange: (active: string) => void;
}

export function Navbar({
  desktopOpened = false,
  onToggleDesktop,
  mobileOpened = false,
  onToggleMobile,
  active: _active,
  onActiveChange,
}: DoubleNavbarProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  const mainIconLinks = linksMockdata
    .filter((link) => link.icon !== null && link.group === 'main')
    .map((link) => {
      const isActive = pathname === link.slug;
      return (
        <Tooltip
          disabled={!desktopOpened}
          label={link.label}
          position={desktopOpened ? 'right' : 'bottom'}
          withArrow
          transitionProps={{ duration: 0 }}
          key={link.label}
        >
          <UnstyledButton
            component={Link}
            href={link.slug}
            onClick={() => onActiveChange(link.label)}
            onMouseEnter={() => setHovered(link.label)}
            onMouseLeave={() => setHovered(null)}
            className={classes.iconLink}
            data-active={isActive || undefined}
            data-hovered={link.label === hovered || undefined}
          >
            <link.icon size={22} stroke={1.5} />
          </UnstyledButton>
        </Tooltip>
      );
    });

  const settingsIconLinks = linksMockdata
    .filter((link) => link.group === 'settings')
    .map((link) => {
      const isActive = pathname === link.slug;
      return (
        <Tooltip
          label={link.label}
          position={desktopOpened ? 'right' : 'bottom'}
          withArrow
          transitionProps={{ duration: 0 }}
          key={link.label}
        >
          <UnstyledButton
            component={Link}
            href={link.slug}
            onClick={() => onActiveChange(link.label)}
            onMouseEnter={() => setHovered(link.label)}
            onMouseLeave={() => setHovered(null)}
            className={classes.iconLink}
            data-active={isActive || undefined}
            data-hovered={link.label === hovered || undefined}
          >
            {link.icon && <link.icon size={22} stroke={1.5} />}
          </UnstyledButton>
        </Tooltip>
      );
    });

  const mainLinks = linksMockdata
    .filter((link) => link.group === 'main')
    .map((link) => {
      const isActive = pathname === link.slug;
      return (
        <Anchor
          component={Link}
          href={link.slug}
          underline="never"
          className={classes.link}
          data-active={isActive || undefined}
          data-hovered={hovered === link.label || undefined}
          onClick={() => onActiveChange(link.label)}
          onMouseEnter={() => setHovered(link.label)}
          onMouseLeave={() => setHovered(null)}
          key={link.label}
        >
          {link.label}
        </Anchor>
      );
    });

  return (
    <nav className={`${classes.navbar} ${desktopOpened ? classes.collapsed : ''}`}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <Burger opened={mobileOpened} onClick={onToggleMobile} hiddenFrom="sm" size="sm" />
            {!desktopOpened && (
              <ActionIcon
                mt={4}
                size={22}
                onClick={onToggleDesktop}
                visibleFrom="sm"
                variant="outline"
                color="gray"
              >
                <IconChevronLeft size={18} />
              </ActionIcon>
            )}
            {desktopOpened && (
              <ActionIcon
                mt={4}
                size={22}
                onClick={onToggleDesktop}
                visibleFrom="sm"
                variant="outline"
                color="gray"
              >
                <IconChevronRight size={18} />
              </ActionIcon>
            )}
          </div>
          <Stack justify="space-between" h="100%" mb="md">
            <Stack gap={0}>{mainIconLinks}</Stack>
            <Stack gap={0}>{settingsIconLinks}</Stack>
          </Stack>
        </div>
        {!desktopOpened && (
          <div className={classes.main}>
            <Group className={classes.title}>
              <svg
                viewBox="0 0 154.11 24"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.logoImage}
              >
                <g fill="currentColor" strokeWidth=".36364">
                  <path d="m30.655 23.527v-23.091h5.8545v23.091z" />
                  <path d="m61.418 23.855-11.818-10.436-1.8545-1.5273v11.636h-5.7455v-23.382h0.25454l11.745 10.4c0.65455 0.50909 1.2364 1.0909 1.8909 1.5636v-11.673h5.7818v23.418h-0.21818z" />
                  <path d="m77.418 0c7.1273 0 12.218 5.3455 12.218 12 0 6.6545-5.0545 12-12.218 12s-12.218-5.3091-12.218-12c0-6.6909 5.0909-12 12.218-12zm0 18.655c3.7455 0 6.2909-3.0545 6.2909-6.6545 0-3.6-2.5455-6.6545-6.2909-6.6545-3.7455 0-6.3273 3.0909-6.3273 6.6545 0 3.5636 2.5818 6.6545 6.3273 6.6545z" />
                  <path d="m103.2 5.3818v18.145h-5.8909v-18.145h-6.1455v-4.9455h18.218v4.9455h-6.1455z" />
                  <path d="m113.2 23.527v-23.091h15.127v4.9455h-9.2727v4.1091h7.9273v4.6909h-7.9273v4.4364h9.7455v4.9455h-15.636z" />
                  <path d="m139.16 10.618 7.9636-10.182h6.8727l-8.0364 9.8545 8.1455 13.236h-6.5091l-5.6-9.5273-2.8364 3.3455v6.1818h-5.8545v-23.091h5.8545z" />
                </g>
                <g fill="currentColor" strokeWidth=".36364">
                  <path d="m23.491 0.47273-11.309 2.8364 8.2182 8.4" />
                  <path d="m8.2182 14.836-8.2182-8.4 11.309-2.8364z" />
                  <path d="m20.145 12.618-11.309 2.8364 8.1818 8.4" />
                </g>
              </svg>
            </Group>
            <Stack gap={0}>{mainLinks}</Stack>
          </div>
        )}
      </div>
    </nav>
  );
}
