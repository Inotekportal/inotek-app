'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export function ColorSchemeToggle() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const showColorSchemeNotification = (message: string, title: string = 'Color scheme changed') => {
    notifications.show({
      title,
      message,
      color: 'green',
    });
  };

  return (
    <Group justify="center" mt="xl">
      <Group justify="center">
        <Button
          miw={70}
          onClick={() => {
            setColorScheme('light');
            showColorSchemeNotification('Switched to light mode');
          }}
        >
          Light
        </Button>
        <Button
          miw={70}
          onClick={() => {
            setColorScheme('dark');
            showColorSchemeNotification('Switched to dark mode');
          }}
        >
          Dark
        </Button>
      </Group>
      <Group justify="center">
        <Button
          miw={70}
          onClick={() => {
            setColorScheme('auto');
            showColorSchemeNotification('Switched to auto mode');
          }}
        >
          Auto
        </Button>
        <Button
          miw={70}
          onClick={() => {
            clearColorScheme();
            showColorSchemeNotification('Color scheme preference has been cleared');
          }}
        >
          Clear
        </Button>
      </Group>
    </Group>
  );
}
