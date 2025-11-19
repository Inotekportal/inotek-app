import { Badge, Burger, Group, Indicator, Text } from '@mantine/core';
import { HeaderControls } from './HeaderControls/HeaderControls';
import classes from './Header.module.css';

// const links = [
//   { link: '/about', label: 'Features' },
//   { link: '/pricing', label: 'Pricing' },
// ];

interface HeaderProps {
  mobileOpened: boolean;
  onToggleMobile: () => void;
  onOpenDesktop: () => void;
  active: string;
}

export function Header({ mobileOpened, onToggleMobile, onOpenDesktop, active }: HeaderProps) {
  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={classes.link}
  //     onClick={(event) => event.preventDefault()}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={mobileOpened}
            onClick={() => {
              onToggleMobile();
              onOpenDesktop();
            }}
            lineSize={1}
            hiddenFrom="sm"
            size="sm"
          />
          <Text>{active}</Text>
        </Group>

        <Group>
          <Indicator inline processing color="red" size={8}>
            <Badge display="block">New</Badge>
          </Indicator>

          <HeaderControls />
        </Group>
      </div>
    </header>
  );
}
