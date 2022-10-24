import styled from '@emotion/native';

const Container = styled.View`
  padding: 16px 16px 0;
  background-color: #ffffff;
`;

export default function ContainerV1({ children, endOfContainer }) {
  return (
    <Container
      style={
        endOfContainer && {
          paddingBottom: 16,
          marginBottom: 12,
        }
      }
    >
      {children}
    </Container>
  );
}
