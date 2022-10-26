import { View, Text } from 'react-native';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Feather';
import Container from '../Container/ContainerV1';
import Title from '../designs/Title';
import Date from '../designs/Date';
import Thumbnail from '../designs/Thumbnail';

const Card = styled.View`
  border: 1px solid #ebebeb;
  border-radius: 8px;
  height: 300px;
`;

const Bottom = styled.View`
  padding: 12px 16px;
  justify-content: space-between;
`;

export default function CardV1({ thumbnail, title, date }) {
  return (
    <Container bottomGap>
      <Card>
        <Thumbnail.Large defaultSource={thumbnail} />

        <Bottom style={{ flexDirection: 'row' }}>
          <View style={{ width: 260 }}>
            <Title.V1 numberOfLines={2}>{title}</Title.V1>
            <Date.V1>{date}</Date.V1>
          </View>

          <Icon name='share' size={20} color='#a0a0a0' />
        </Bottom>
      </Card>
    </Container>
  );
}
