'use client';

import { IconMail } from '@tabler/icons-react';
import { ActionIcon, Affix, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Newsletter } from './Newsletter';

export function NewsletterModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Subscribe to Newsletter"
        size="sm"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        transitionProps={{
          transition: 'fade',
          duration: 500,
        }}
        centered
      >
        <Newsletter onSuccess={close} />
      </Modal>

      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon
          variant="filled"
          color="blue"
          size="xl"
          radius="xl"
          onClick={open}
          aria-label="Subscribe to newsletter"
        >
          <IconMail size={20} />
        </ActionIcon>
      </Affix>
    </>
  );
}
