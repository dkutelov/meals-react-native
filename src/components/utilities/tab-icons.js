import { Ionicons } from "@expo/vector-icons";
import { colors } from "@infrastructure/theme/colors";

export const TAB_ICONS = {
  Restaurants: (focused) =>
    focused ? "ios-restaurant" : "ios-restaurant-outline",
  Checkout: (focused) => (focused ? "md-cart" : "md-cart-outline"),
  Map: (focused) => (focused ? "md-map" : "md-map-outline"),
  Settings: (focused) => (focused ? "ios-settings" : "ios-settings-outline"),
};

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => (
    <Ionicons name={TAB_ICONS[route.name](focused)} size={size} color={color} />
  ),
  tabBarActiveTintColor: colors.brand.primary,
  tabBarInactiveTintColor: colors.brand.muted,
});
