import { Container, Flex, Space } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NewsletterModal } from '@/components/Newsletter/NewsletterModal';
import { Welcome } from '@/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Container size="lg" px="md">
        <Flex direction="column" justify="center" align="center" h="100vh">
          <Welcome />
          <Space h="xl" />
          <ColorSchemeToggle />
          <NewsletterModal />
        </Flex>
      </Container>
    </>
  );
}
