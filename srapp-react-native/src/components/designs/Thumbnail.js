import styled from '@emotion/native';

Thumbnail.Large = styled.Image`
  /* width: 100%; */
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

Thumbnail.Small = styled.Image`
  width: 100px;
  height: 60px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default function Thumbnail({ children }) {
  return <>{children}</>;
}
