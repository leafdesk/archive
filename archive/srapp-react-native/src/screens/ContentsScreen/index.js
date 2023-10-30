import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OnSeriesScreen from './OnSeriesScreen';
import SpecialLectureScreen from './SpecialLectureScreen';
import PrayerMeetingScreen from './PrayerMeetingScreen';
import ShortVideoScreen from './ShortVideoScreen';

const Tab = createMaterialTopTabNavigator();

export default function ContentsScreen() {
  return (
    <Tab.Navigator initialRouteName='OnSeries'>
      <Tab.Screen
        name='OnSeries'
        component={OnSeriesScreen}
        options={{ title: 'ON시리즈' }}
      />
      <Tab.Screen
        name='SpecialLecture'
        component={SpecialLectureScreen}
        options={{ title: '환언특강' }}
      />
      <Tab.Screen
        name='PrayerMeeting'
        component={PrayerMeetingScreen}
        options={{ title: '주중기도회' }}
      />
      <Tab.Screen
        name='ShortVideo'
        component={ShortVideoScreen}
        options={{ title: '1분은혜' }}
      />
    </Tab.Navigator>
  );
}
