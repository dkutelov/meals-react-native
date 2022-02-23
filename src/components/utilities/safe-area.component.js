import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
//currentHeight is not available on iOS and returns undefined
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
