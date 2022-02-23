import React from "react";
import { colors } from "../../infrastructure/theme/colors";

import { LoadingContainer, Loading } from "./loading.styles";

export const LoadingIndicator = ({ size = 50, color = colors.ui.primary }) => (
  <LoadingContainer>
    <Loading size={size} animating={true} color={color} />
  </LoadingContainer>
);
