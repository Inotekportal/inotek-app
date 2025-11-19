import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center">
        Welcome to{' '}
        <Text
          className={classes.text}
          inherit
          variant="gradient"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Inotek App
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="0">
        The DEMO version of the{' '}
        <Anchor href="https://inotek-app.appto.live/dashboard" size="lg">
          Inotek Dashboard
        </Anchor>{' '}
        application.
      </Text>
    </>
  );
}
