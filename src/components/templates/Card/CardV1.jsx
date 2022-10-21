import { View, Text } from 'react-native';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Feather';
import ContainerV1 from '../../designs/Container/ContainerV1';

const Card = styled.View`
  border: 1px solid #ebebeb;
  border-radius: 8px;
  height: 300px;
`;

const Thumbnail = styled.Image`
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Bottom = styled.View`
  padding: 12px 16px;
  justify-content: space-between;
`;

const Title = styled.Text`
  width: 260px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22;
  color: #333333;
`;

const Date = styled.Text`
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0 0;
  color: #a0a0a0;
`;

export default function CardV1({ thumbnail, title, date, endOfContainer }) {
  return (
    <ContainerV1 endOfContainer={endOfContainer}>
      <Card>
        <Thumbnail defaultSource={thumbnail} />

        <Bottom style={{ flexDirection: 'row' }}>
          <View>
            <Title numberOfLines={2}>{title}</Title>
            <Date>{date}</Date>
          </View>

          <Icon name='share' size={20} color='#a0a0a0' />
        </Bottom>
      </Card>
    </ContainerV1>
  );
}
