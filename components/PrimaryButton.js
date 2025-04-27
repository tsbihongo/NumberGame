import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onTap }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedonIOS]
            : styles.buttonInnerContainer
        }
        onPress={onTap}
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
    //width: "150",
    margin: 5,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  pressedonIOS: {
    opacity: 0.75,
  },
});
