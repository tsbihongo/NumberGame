import { View, TextInput, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    backgroundColor: "#9a4c93",
    marginTop: 150,
    marginHorizontal: 70,
    padding: 30,
    alignItems: "center",
    elevation: 20, //this wont work on iOS, other shadow properties have to use
    borderRadius: 12,
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
