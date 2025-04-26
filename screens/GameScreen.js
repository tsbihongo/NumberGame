import { Text, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { useState } from "react";
import Colors from "../utils/Colors";
import GuessDisplay from "../components/GuessDisplay";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userInput }) {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userInput
  );
  const [currentGuess, guessUpdater] = useState(initialGuess);

  function nextGuessHandler(direction) {
    // direction => 'lower' or 'greater'
    if (
      (direction === "lower" && currentGuess < userInput) ||
      (direction === "higher" && currentGuess > userInput)
    ) {
      Alert.alert("Play Fair.", "I dont play with liars.", [
        { text: "My bad bro.", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    guessUpdater(newRndNumber);
  }

  return (
    <>
      <Title>I am guessing...</Title>
      <View style={styles.wholeScreen}>
        <View style={styles.guessContainer}>
          <GuessDisplay>{currentGuess}</GuessDisplay>

          <View style={styles.buttonsHolder}>
            <PrimaryButton onTap={nextGuessHandler.bind(this, "higher")}>
              Higher
            </PrimaryButton>
            <PrimaryButton onTap={nextGuessHandler.bind(this, "lower")}>
              Lower
            </PrimaryButton>
          </View>
        </View>
        <View style={styles.logsHolder}>
          <Text>Log of rounds:</Text>
        </View>
      </View>
    </>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  wholeScreen: {
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },
  guessContainer: {
    height: 300,
    width: 250,
    backgroundColor: Colors.boxColor,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    elevation: 20, //this wont work on iOS, other shadow properties have to use
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: Colors.titleColor,
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
  },
  buttonsHolder: {
    flexDirection: "row",
  },
  logsHolder: {},
});
