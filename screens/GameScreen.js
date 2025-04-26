import { Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.wholeScreen}>
      <Title />
      <View style={styles.guessContainer}>
        <View style={styles.displayGuess}>
          <Text>---Number displayed here--</Text>
        </View>
        <View style={styles.buttonsHolder}>
          <PrimaryButton>Higher</PrimaryButton>
          <PrimaryButton>Lower</PrimaryButton>
        </View>
      </View>
      <View style={styles.logsHolder}>
        <Text>Log of rounds:</Text>
      </View>
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  wholeScreen: {
    padding: 40,
    marginTop: 40,
    //alignItems: "center",
  },
  guessContainer: {
    height: 300,
    width: 250,
    backgroundColor: "#9a4c93",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    elevation: 20, //this wont work on iOS, other shadow properties have to use
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
  },
  displayGuess: {
    borderColor: "red",
    borderWidth: 4,
    backgroundColor: "#bf80b9",
  },
  buttonsHolder: {
    flexDirection: "row",
  },
  logsHolder: {},
});
