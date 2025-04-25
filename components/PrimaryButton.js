import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function dummyPress() {}
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={dummyPress}
        android_ripple={{ color: "#e20dd4" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "#e4ace0",

    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 3,
  },
  buttonOuterContainer: {
    width: "200",
    margin: 10,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
