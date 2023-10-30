'use client';

import { useState, useEffect } from 'react';
import { IonNav } from '@ionic/react';

export default function Home() {
  const [rootPage, setRootPage] = useState<Function>();

  useEffect(() => {
    setRootPage(() => RootPage);
  }, []);

  return <IonNav root={rootPage} />;
}

function RootPage() {
  return;
}
