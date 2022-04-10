import styled from "styled-components/native";
import { IconButton, Colors } from "react-native-paper";
import { Camera } from "expo-camera";

export const CameraContainer = styled.View`
  flex: 1;
`;

export const ProfileCamera = styled(Camera)`
  flex: 1;
`;

export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto 20px 12px;
`;

export const FlipIcon = styled(IconButton).attrs({
  color: Colors.white,
  size: 28,
})`
  align-self: flex-start;
  margin: 8px;
`;

export const CameraIcon = styled(IconButton).attrs({
  color: Colors.white,
  size: 28,
})`
  margin: 8px;
`;

export const Spacer = styled(IconButton)`
  width: 28px;
  height: 28px;
  margin: 8px 16px;
`;
