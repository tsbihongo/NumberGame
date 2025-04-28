import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
function GuessItem({ roundNumber, myGuess }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>My guess was: {myGuess}</Text>
    </View>
  );
}
export default GuessItem;

const styles = StyleSheet.create({
  itemContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#d718e7",
    borderColor: "white",
    borderRadius: 300,
    alignItems: "center",
    width: "100%",
    elevation: 8, //for android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "feather-bold",
    fontSize: 20,
    color: "white",
  },
});
