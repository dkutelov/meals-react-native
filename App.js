import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

const isAndorid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{ ...styles.container, marginTop: isAndorid ? 20 : 0 }}
      >
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>Search</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    backgroundColor: "blue",
    padding: 15
  },
  list: {
    flex: 1,
    backgroundColor: "green",
    padding: 15
  }
});
