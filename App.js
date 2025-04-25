import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#9a4c93", "#ffd321"]}
      style={styles.backgroundView}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    //backgroundColor: "#c80096",
  },
});
