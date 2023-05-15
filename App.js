import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import { useState } from 'react';
import GameScreen from './src/screens/GameScreen'
import { useFonts } from 'expo-font';
import ResultScreen from './src/screens/ResultScreen';


export default function App() {
  // Se utiliza el hook useFonts para poder utilizarla en el proyecto
  // loaded es para identificar si la fuente esta cargada o no
  const [loaded] = useFonts({
    // debe estar escrito igual e ingresar la ubicacion + el formato
    "Prompt-Regular": require("./src/assets/fonts/Prompt-Regular.ttf"),
  })

  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState("")

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameResult = ({ selection, number }) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
    setWinOrLose(true);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} />;
  } else if (userNumber) {
    content = <GameScreen handleResult={handleGameResult} />;
  }




  if (!loaded) {
    return null;
  };

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} newStyles={styles.headerTitle} />
      {content}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 100,
    fontFamily: "Prompt-Italic",
  },
});
