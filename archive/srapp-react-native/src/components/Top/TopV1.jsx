import styled from '@emotion/native';
import Container from '../Container/ContainerV1';

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #333333;
`;

const Description = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #a0a0a0;
`;

export default function TopV1({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
}
