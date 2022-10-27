import { ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Top from '../components/Top/TopV1';
import Card from '../components/Card/CardV1';
import WeekdayContent from './WeekdayContent';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <ScrollView>
      <Top title='주일 설교' />
      <Card
        thumbnail='https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/29daac0c-04de-417c-565c-39606d361e00/public'
        title='예수는 부활과 생명이시다(Jesus is the Resurrection and the life) 요한복음 11:17~30'
        date='2022.10.16'
      />

      <Top title='주중 콘텐츠' />
      <WeekdayContent />
    </ScrollView>
  );
}
