import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/Colors";
import Title from "../components/Title";
function StartGameScreen({ onGameStart }) {
  const [enteredNumber, numberUpdater] = useState("");
  let [mistakeCount, mistakeCountUpdater] = useState(0);

  function enteredTextHandler(enteredText) {
    numberUpdater(enteredText);
  }

  function confirmNumber() {
    const finalNumber = parseInt(enteredNumber); //converting string to number

    if (isNaN(finalNumber) || finalNumber <= 0 || finalNumber > 99) {
      mistakeCount++;
      mistakeCountUpdater(mistakeCount);
      if (mistakeCount < 3) {
        Alert.alert(
          "Invalid input! Sorry!",
          "Input has to be a number between 1 and 99 (inclusive)",
          [
            {
              text: "Alright!",
              style: "destructive",
              onPress: resetInputHandler,
            },
          ]
        );
      } else {
        Alert.alert(
          "Are you Stupid??",
          "Do you not understand English? The number has to be in between 1 and 99 (inclusive)!",
          [
            {
              text: "Sorry I am stupid.",
              style: "destructive",
              onPress: resetInputHandler,
            },
          ]
        );
        mistakeCountUpdater(0);
      }
    } else {
      onGameStart(finalNumber);
    }

    return;
  }
  function resetInputHandler() {
    numberUpdater("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Let Me Guess</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instruction}>Enter a number between 1 to 100:</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={enteredTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onTap={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onTap={confirmNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    //flex: 1,
    backgroundColor: Colors.boxColor,
    marginTop: 50,
    marginHorizontal: 70,
    padding: 30,
    alignItems: "center",
    elevation: 20, //this wont work on iOS, other shadow properties have to use
    borderRadius: 12,
  },
  instruction: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  textInput: {
    width: 60,
    borderBottomWidth: 3,
    borderBottomColor: "#e00ff8",
    marginBottom: 10,
    fontSize: 40,
    height: 90,
    color: "#ffffff",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
