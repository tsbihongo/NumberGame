import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, Text, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [finalNumber, finalNumberUpdater] = useState();

  const [gameIsOver, gameOverScreenLoader] = useState(false);

  let screen = <StartGameScreen onGameStart={startGameHandler} />;

  function startGameHandler(finalNumberReceived) {
    finalNumberUpdater(finalNumberReceived);
  }
  function gameOverHandler() {
    gameOverScreenLoader(true);
  }

  if (finalNumber && !gameIsOver) {
    screen = (
      <GameScreen userInput={finalNumber} onGameOver={gameOverHandler} />
    );
  } else if (gameIsOver) {
    screen = <GameOverScreen />;
  }

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
        <SafeAreaView style={styles.backgroundView}>{screen}</SafeAreaView>
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
