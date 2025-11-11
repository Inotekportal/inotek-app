'use client';

import { Anchor, Box, Group, Text } from '@mantine/core';
import classes from './FooterSimple.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Box className={classes.inner}>
        <Text>Inotek App</Text>
        <Group className={classes.links}>{items}</Group>
      </Box>
    </div>
  );
}
