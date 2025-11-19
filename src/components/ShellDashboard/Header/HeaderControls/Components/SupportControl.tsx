import { IconBook } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';

export function SupportControl() {
  return (
    <HeaderControl tooltip="Documentation" aria-label="Check the documentation">
      <IconBook size={20} stroke={1.5} />
    </HeaderControl>
  );
}
