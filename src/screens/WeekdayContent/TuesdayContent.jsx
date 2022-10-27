import { View } from 'react-native';
import ListRow from '../../components/ListRow/ListRowV1';

export default function MondayContent({ navigation }) {
  return (
    <View>
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
    </View>
  );
}
