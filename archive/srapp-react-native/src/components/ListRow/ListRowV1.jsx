import { View, StyleSheet, TouchableHighlight } from 'react-native';
import styled from '@emotion/native';
import Title from '../designs/Title';
import Date from '../designs/Date';
import Thumbnail from '../designs/Thumbnail';

const styles = StyleSheet.create({
  nextRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
});

export default function ListRowV1({ thumbnail, title, date, lastRow }) {
  return (
    <TouchableHighlight underlayColor='#eeeeee' onPress={() => {}}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 8,
          },
          !lastRow && styles.nextRow,
        ]}
      >
        <Thumbnail.Small defaultSource={thumbnail} style={{ marginRight: 8 }} />

        <View>
          <Title.V1>{title}</Title.V1>
          <Date.V1>{date}</Date.V1>
        </View>
      </View>
    </TouchableHighlight>
  );
}
