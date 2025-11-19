'use client';

import { Overlay, Transition } from '@mantine/core';

interface MobileOverlayProps {
  mounted: boolean;
}

export function MobileOverlay({ mounted }: MobileOverlayProps) {
  return (
    <Transition mounted={mounted} transition="fade" duration={500} exitDuration={500}>
      {(transitionStyle) => (
        <Overlay
          hiddenFrom="sm"
          fixed
          color="#000"
          style={{ ...transitionStyle, top: 0, right: 0, bottom: 0, zIndex: 150 }}
          backgroundOpacity={0.55}
          blur={0}
        />
      )}
    </Transition>
  );
}
