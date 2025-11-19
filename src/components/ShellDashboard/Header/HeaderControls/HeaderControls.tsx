import { Group, Tooltip } from '@mantine/core';
import { ColorSchemeControl } from './Components/ColorSchemeControl';
import { SupportControl } from './Components/SupportControl';
import { UserControl } from './Components/UserControl';

interface HeaderControlsProps {
  withUser?: boolean;
  withColorScheme?: boolean;
  withSupport?: boolean;
}

export function HeaderControls({
  withUser = true,
  withColorScheme = true,
  withSupport = true,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        {withSupport && <SupportControl />}
        {withColorScheme && <ColorSchemeControl />}
        {withUser && <UserControl />}
      </Group>
    </Tooltip.Group>
  );
}
