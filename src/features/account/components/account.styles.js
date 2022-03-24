import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Background = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
