import styled from "styled-components/native";
import { Camera } from "expo-camera";

export const CameraContainer = styled.View`
  flex: 1;
`;

export const MyCamera = styled(Camera)`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  margin: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex: 0.1;
  align-self: flex-end;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.bg.primary}; ;
`;
