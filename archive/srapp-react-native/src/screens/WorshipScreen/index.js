import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SundaySermonScreen from './SundaySermonScreen';
import MainWorshipScreen from './MainWorshipScreen';
import WednesdayWorshipScreen from './WednesdayWorshipScreen';

const Tab = createMaterialTopTabNavigator();

export default function WorshipScreen() {
  return (
    <Tab.Navigator initialRouteName='SundaySermon'>
      <Tab.Screen
        name='SundaySermon'
        component={SundaySermonScreen}
        options={{ title: '주일설교' }}
      />
      <Tab.Screen
        name='MainWorship'
        component={MainWorshipScreen}
        options={{ title: '대예배' }}
      />
      <Tab.Screen
        name='WednesdayWorship'
        component={WednesdayWorshipScreen}
        options={{ title: '수요예배' }}
      />
    </Tab.Navigator>
  );
}
