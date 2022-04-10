import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";

import { View, Text } from "react-native";
import {
  CameraContainer,
  MyCamera,
  ButtonContainer,
  Button,
  ButtonText,
} from "../components/camera.styles";

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <MyCamera type={type}>
        <ButtonContainer>
          <Button
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <ButtonText> Flip </ButtonText>
          </Button>
        </ButtonContainer>
      </MyCamera>
    </CameraContainer>
  );
};
