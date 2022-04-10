import React, { useState, useEffect, useRef, useContext } from "react";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text } from "react-native";
import {
  CameraContainer,
  ProfileCamera,
  ActionButtonsContainer,
  FlipIcon,
  CameraIcon,
  Spacer,
} from "../components/camera.styles";
import { AuthenticationContext } from "@services";

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  const swapCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)}>
        <ActionButtonsContainer>
          <FlipIcon icon="camera-party-mode" onPress={swapCamera} />
          <CameraIcon icon="camera" onPress={snap} />
          <Spacer />
        </ActionButtonsContainer>
      </ProfileCamera>
    </CameraContainer>
  );
};
