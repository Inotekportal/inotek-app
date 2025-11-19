'use client';

import { IconMail, IconUser } from '@tabler/icons-react';
import { Button, Checkbox, Group, Stack, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

// Interface nie jest potrzebny - useForm interferuje typy z initialValues
interface NewsletterProps {
  onSuccess?: () => void;
}

export function Newsletter({ onSuccess }: NewsletterProps) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      termsOfService: false,
    },
    validate: {
      name: hasLength({ min: 3 }, 'Name must be at least 3 characters'),
      email: isEmail('Enter a valid email address'),
      termsOfService: isNotEmpty('You must agree to the terms of service'),
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
      console.log('Newsletter subscription:', values);

      notifications.show({
        title: 'Success!',
        message: 'You have been subscribed to the newsletter',
        color: 'green',
      });

      onSuccess?.();
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'An error occurred while saving. Please try again.',
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
          label="Name"
          placeholder="Enter your name"
          leftSection={<IconUser size={16} />}
          key={form.key('name')}
          {...form.getInputProps('name')}
        />

        <TextInput
          withAsterisk
          label="Email Address"
          placeholder="your@email.com"
          leftSection={<IconMail size={16} />}
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="sm"
          label={
            <>
              <Text component="span" style={{ color: 'var(--mantine-color-error)' }}>
                *
              </Text>{' '}
              I agree to sell my privacy
            </>
          }
          key={form.key('termsOfService')}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="center">
          <Button mt="lg" type="submit" loading={false}>
            Subscribe
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
