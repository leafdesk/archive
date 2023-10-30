import { useState } from 'react';

export default function useTabs(initialTab, allTabs) {
  if (!allTabs || !Array.isArray(allTabs)) return;
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return { tab: allTabs[currentIndex], setTab: setCurrentIndex };
}
