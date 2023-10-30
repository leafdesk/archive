import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import WorshipScreen from './src/screens/WorshipScreen';
import BibleScreen from './src/screens/BibleScreen';
import ContentsScreen from './src/screens/ContentsScreen';
import ViewAllScreen from './src/screens/ViewAllScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: '홈' }}
        />
        <Tab.Screen
          name='Worship'
          component={WorshipScreen}
          options={{ title: '예배' }}
        />
        <Tab.Screen
          name='Bible'
          component={BibleScreen}
          options={{ title: '성경' }}
        />
        <Tab.Screen
          name='Contents'
          component={ContentsScreen}
          options={{ title: '콘텐츠' }}
        />
        <Tab.Screen
          name='ViewAll'
          component={ViewAllScreen}
          options={{ title: '전체보기' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
