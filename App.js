import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberTextInput}
          placeholder="Enter your number here!"
        />
        <Pressable>
          <Text styles={styles.enterButton}>Enter Number!!!</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    backgroundColor: "#9e35b5",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#e688de",
    padding: 70,
  },
  numberTextInput: {
    borderStyle: "solid",
    borderColor: "#5200a4",
    color: "#b01600",
  },
  enterButton: {
    color: "#ffff3c",
  },
});
