import styled from '@emotion/native';

const Container = styled.View`
  padding: 16px 16px 0;
  background-color: #ffffff;
`;

export default function ContainerV1({ children, bottomGap }) {
  return (
    <Container
      style={
        bottomGap && {
          paddingBottom: 16,
          marginBottom: 16,
        }
      }
    >
      {children}
    </Container>
  );
}
