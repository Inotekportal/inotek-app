import { Container, Flex } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <Container size="lg" px="md">
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Welcome />
        <ColorSchemeToggle />
      </Flex>
    </Container>
  );
}
