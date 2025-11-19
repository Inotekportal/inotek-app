'use client';

import { IconMail } from '@tabler/icons-react';
import { Button, Group, Input, Select, SegmentedControl, Stack, Textarea, TextInput } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { linksMockdata } from '@/components/ShellDashboard/Navbar/Navbar';

interface TaskProps {
  onSuccess?: () => void;
}

export function Task({ onSuccess }: TaskProps) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      content: '',
      page: '',
      category: '',
    },
    validate: {
      email: isEmail('Enter a valid email address'),
      content: hasLength({ min: 10 }, 'Task content must be at least 10 characters'),
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
      console.log('Task submission:', values);

      notifications.show({
        title: 'Success!',
        message: 'Task has been submitted successfully',
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
          label="Task Content"
          placeholder="Describe your task..."
          minRows={4}
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

        <Input.Wrapper
          label="Category"
          withAsterisk
          error={form.errors.category}
        >
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

