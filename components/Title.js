import { Text, StyleSheet } from "react-native";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    //fontWeight: "bold",
    fontFamily: "feather-bold",
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    marginTop: 60,
    marginHorizontal: 20,
  },
});
