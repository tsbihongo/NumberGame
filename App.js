import { StatusBar } from "expo-status-bar";

import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#9a4c93", "#ffd321"]}
      style={styles.backgroundView}
    >
      <ImageBackground
        source={require("./assets/images/back2.jpg")}
        resizeMode="cover"
        style={styles.backgroundView}
        imageStyle={styles.imageStyling}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    //backgroundColor: "#c80096",
  },
  imageStyling: {
    opacity: 0.25,
  },
});
