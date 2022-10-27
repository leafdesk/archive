import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Container from '../../components/Container/ContainerV1';
import MondayContent from './MondayContent';
import TuesdayContent from './TuesdayContent';

const Tab = createMaterialTopTabNavigator();

export default function WeekdayContent() {
  return (
    <Container>
      <Tab.Navigator>
        <Tab.Screen
          name='Monday'
          component={MondayContent}
          options={{ title: '월요일' }}
        />
        <Tab.Screen
          name='Tuesday'
          component={TuesdayContent}
          options={{ title: '화요일' }}
        />
        {/* <Tab.Screen
          name='Wednesday'
          component={MondayContent}
          options={{ title: '수요일' }}
        />
        <Tab.Screen
          name='Thursday'
          component={MondayContent}
          options={{ title: '목요일' }}
        />
        <Tab.Screen
          name='Friday'
          component={MondayContent}
          options={{ title: '금요일' }}
        /> */}
      </Tab.Navigator>
    </Container>
  );
}
