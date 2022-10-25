import styled from '@emotion/native';

const Title = ({ children }) => <>{children}</>;

const V1 = styled.Text`
  width: 260px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22;
  color: #333333;
`;

Title.V1 = V1;

export default Title;
