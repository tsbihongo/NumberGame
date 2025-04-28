import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../utils/Colors";
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER GOT YOU HEHE</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/game_over.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightedText}>X</Text> rounds
        to guess the number <Text style={styles.highlightedText}>Y</Text>.
      </Text>
      <PrimaryButton>Play Again</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.boxColor,
    overflow: "hidden",
    margin: 30,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "feather-bold",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  highlightedText: {
    fontFamily: "feather-bold",
    color: "#f2500b",
  },
});
