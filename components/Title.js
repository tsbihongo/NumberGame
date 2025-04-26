import { Text, StyleSheet } from "react-native";
function Title() {
  return <Text style={styles.title}>I am guessing...</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
  },
});
