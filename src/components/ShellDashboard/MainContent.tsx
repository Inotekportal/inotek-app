'use client';

import { MobileOverlay } from './Navbar/MobileOverlay';

interface MainContentProps {
  mobileOpened: boolean;
  children?: React.ReactNode;
}

export function MainContent({ mobileOpened, children }: MainContentProps) {
  return (
    <>
      <MobileOverlay mounted={mobileOpened} />

      {children}
    </>
  );
}
