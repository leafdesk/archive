import styled from '@emotion/native';

const ButtonContainer = styled.TouchableOpacity`
  color: #ffffff;
  padding: 8px 12px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  box-sizing: border-box;
`;

const ButtonText = styled.Text`
  color: #333333;
  font-size: 14px;
`;

const ActiveButtonContainer = styled.TouchableOpacity`
  background-color: #333333;
  padding: 8px 12px;
  border-radius: 50%;
  box-sizing: border-box;
`;

const ActiveButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;

export default function BadgeButton({ onPress, title, active }) {
  return (
    <>
      {active ? (
        <ActiveButtonContainer onPress={onPress}>
          <ActiveButtonText>{title}</ActiveButtonText>
        </ActiveButtonContainer>
      ) : (
        <ButtonContainer onPress={onPress}>
          <ButtonText>{title}</ButtonText>
        </ButtonContainer>
      )}
    </>
  );
}
