import { useState } from 'react';
import { View } from 'react-native';
import useTabs from '../../libs/useTabs';
import BadgeButton from '../BadgeButton/BadgeButton';

export default function BadgeTab({ tabs }) {
  const { tab, setTab } = useTabs(0, tabs);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 16,
        }}
      >
        {tabs.map((tab, index) => (
          <BadgeButton
            onPress={() => {
              setTab(index);
              setActiveIndex(index);
            }}
            title={tab.title}
            key={index}
            active={index === activeIndex ? true : false}
          />
        ))}
      </View>

      <View>{tab.component}</View>
    </>
  );
}
