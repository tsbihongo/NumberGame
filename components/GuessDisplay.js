import { View, Text, StyleSheet } from "react-native";

function GuessDisplay({ children }) {
  return (
    <View style={styles.displayGuess}>
      <Text style={styles.guessStyle}>Is it {children} ?</Text>
    </View>
  );
}

export default GuessDisplay;

const styles = StyleSheet.create({
  guessStyle: {
    color: "white",
    fontSize: 30,
    fontFamily: "feather-bold",
  },

  displayGuess: {
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#bf80b9",
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
});
