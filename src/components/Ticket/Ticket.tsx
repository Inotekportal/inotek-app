'use client';

import { IconMail, IconUser } from '@tabler/icons-react';
import {
  Button,
  Group,
  Input,
  SegmentedControl,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { linksMockdata } from '@/components/ShellDashboard/Navbar/Navbar';

interface TicketProps {
  onSuccess?: () => void;
}

export function Ticket({ onSuccess }: TicketProps) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      content: '',
      page: '',
      category: '',
    },
    validate: {
      email: isEmail('Enter a valid email address'),
      content: hasLength({ min: 10 }, 'Ticket content must be at least 10 characters'),
      page: isNotEmpty('Please select a page'),
      category: isNotEmpty('Please select a category'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Random upload error simulation (30% chance of error)
          if (Math.random() < 0.5) {
            reject(new Error('Network error'));
          } else {
            resolve(undefined);
          }
        }, 1000);
      });

      // Add real API call here
      // eslint-disable-next-line no-console
      console.log('Ticket submission:', values);

      notifications.show({
        title: 'Success!',
        message: 'Ticket has been submitted successfully',
        color: 'green',
      });

      onSuccess?.();
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'An error occurred while submitting. Please try again.',
        color: 'red',
      });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Name"
          placeholder="Your name"
          leftSection={<IconUser size={16} />}
          key={form.key('name')}
          {...form.getInputProps('name')}
        />

        <TextInput
          withAsterisk
          data-autofocus
          label="Email"
          placeholder="your@email.com"
          leftSection={<IconMail size={16} />}
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <Textarea
          withAsterisk
          label="Ticket Content"
          placeholder="Describe your ticket..."
          autosize
          minRows={6}
          maxRows={6}
          key={form.key('content')}
          {...form.getInputProps('content')}
        />

        <Select
          withAsterisk
          label="Page"
          placeholder="Select page"
          data={linksMockdata.map((link) => ({
            value: link.slug,
            label: link.label,
          }))}
          key={form.key('page')}
          {...form.getInputProps('page')}
        />

        <Input.Wrapper label="Category" withAsterisk error={form.errors.category}>
          <SegmentedControl
            fullWidth
            mt="xs"
            data={[
              { value: 'feature', label: 'Feature' },
              { value: 'bug', label: 'Bug' },
              { value: 'note', label: 'Note' },
            ]}
            key={form.key('category')}
            {...form.getInputProps('category')}
          />
        </Input.Wrapper>

        <Group justify="flex-end">
          <Button mt="lg" type="submit" loading={false}>
            Submit
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
