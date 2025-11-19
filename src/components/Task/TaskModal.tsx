'use client';

import { IconChecklist } from '@tabler/icons-react';
import { ActionIcon, Affix, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Task } from './Task';

export function TaskModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Submit Task"
        size="md"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        transitionProps={{
          transition: 'fade',
          duration: 500,
        }}
        centered
        zIndex={300}
      >
        <Task onSuccess={close} />
      </Modal>

      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon
          variant="filled"
          color="blue"
          size="xl"
          radius="xl"
          onClick={open}
          aria-label="Submit task"
        >
          <IconChecklist size={20} />
        </ActionIcon>
      </Affix>
    </>
  );
}
