import { ScrollView } from 'react-native';
import Top from '../components/Top/TopV1';
import Card from '../components/Card/CardV1';
import Container from '../components/Container/ContainerV1';
import ListRow from '../components/ListRow/ListRowV1';

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
      <Container bottomGap>
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='열왕기상9-20장'
          date='2022.10.24'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='온라인특별 새벽기도회'
          date='2022.10.24'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='최고의 사랑'
          date='2022.10.24'
          lastRow
        />
      </Container>
    </ScrollView>
  );
}
