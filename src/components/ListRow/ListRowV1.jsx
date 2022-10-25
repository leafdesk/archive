import { View, Text } from 'react-native';
import styled from '@emotion/native';
import Title from '../designs/Title';

const Thumbnail = styled.Image`
  width: 100px;
  height: 60px;
  /* margin: 16px 16px 16px; */
`;

const TextArea = styled.View``;

// const Title = styled.Text`
//   width: 260px;
//   font-size: 18px;
//   font-weight: 600;
//   line-height: 22;
//   color: #333333;
// `;

const Date = styled.Text`
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0 0;
  color: #a0a0a0;
`;

export default function ListRowV1({ thumbnail, title, date }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Thumbnail defaultSource={thumbnail} />

      <TextArea>
        <Title.V1>{title}</Title.V1>
        <Date>{date}</Date>
      </TextArea>
    </View>
  );
}
