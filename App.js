import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";

import { useCallback, useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Text, SafeAreaView } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [finalNumber, finalNumberUpdater] = useState();

  const [gameIsOver, gameOverScreenLoader] = useState(false);

  const [fontsLoaded] = useFonts({
    "feather-bold": require("./assets/fonts/Feather-Bold.ttf"),
  });

  //Callback to hide the splash screen once fonts are loaded
  //const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  //}, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   // While fonts haven't loaded, render nothing
  //   return null;
  // }

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
