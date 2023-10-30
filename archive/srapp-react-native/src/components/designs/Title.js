import styled from '@emotion/native';

Title.V1 = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 22;
  color: #333333;
`;

export default function Title({ children }) {
  return <>{children}</>;
}
