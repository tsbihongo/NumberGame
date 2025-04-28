import { Text, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { useState, useRef, useEffect } from "react";
import Colors from "../utils/Colors";
import GuessDisplay from "../components/GuessDisplay";
import { Entypo } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userInput, onGameOver }) {
  let minBoundary = useRef(1); //
  let maxBoundary = useRef(100);

  const [currentGuess, guessUpdater] = useState(() =>
    generateRandomBetween(minBoundary.current, maxBoundary.current, userInput)
  );
  useEffect(() => {
    if (currentGuess === userInput) {
      onGameOver(guessRoundsNumber);
    }
  }, [currentGuess, userInput, onGameOver]);

  const [guessRoundsNumber, guessRoundsUpdater] = useState(0);

  function nextGuessHandler(direction) {
    guessRoundsUpdater(guessRoundsNumber + 1);
    // direction => 'lower' or 'greater'
    if (
      //lying condition
      (direction === "lower" && currentGuess < userInput) ||
      (direction === "higher" && currentGuess > userInput)
    ) {
      Alert.alert("Play Fair.", "I dont play with liars.", [
        { text: "My bad bro.", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      //if user says low
      maxBoundary.current = currentGuess;
    } else {
      //if user says high
      minBoundary.current = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary.current,
      maxBoundary.current,
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
              <Entypo name="chevron-thin-up" color="green" size={32} />
            </PrimaryButton>
            <PrimaryButton onTap={nextGuessHandler.bind(this, "lower")}>
              <Entypo name="chevron-thin-down" color="red" size={32} />
            </PrimaryButton>
          </View>
        </View>
        <View style={styles.logsHolder}>
          <Text style={styles.whatIguessed}>What I guessed so far:</Text>
          <Text>1</Text>
          <Text>2</Text>
        </View>
      </View>
    </>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },
  guessContainer: {
    flex: 1,
    //height: 200,
    width: 250,
    backgroundColor: Colors.boxColor,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    elevation: 20, //this wont work on iOS, other shadow properties have to use
    borderRadius: 12,
    flex: 1,
    borderWidth: 3,
    borderColor: "yellow",
  },
  // title: {
  //   textAlign: "center",
  //   fontSize: 24,
  //   color: Colors.titleColor,
  //   fontWeight: "bold",
  //   borderWidth: 3,
  //   borderColor: "white",
  //   padding: 10,
  // },
  buttonsHolder: {
    flexDirection: "row",
  },
  whatIguessed: {
    color: "white",
    fontSize: 18,
    //fontWeight: "bold",
    fontFamily: "feather-bold",
  },
  logsHolder: {
    width: 350,
    borderTopWidth: 6,
    borderTopColor: "#c974c7",
    marginTop: 10,
    backgroundColor: "#f4def5",
    flex: 3,
  },
});
