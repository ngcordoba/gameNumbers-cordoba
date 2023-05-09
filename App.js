import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import { useState } from 'react';
import GameScreen from './src/screens/StartGame'
import { useFonts } from 'expo-font';


export default function App() {
  // Se utiliza el hook useFonts para poder utilizarla en el proyecto
  // loaded es para identificar si la fuente esta cargada o no
  const [loaded] = useFonts({
    // debe estar escrito igual e ingresar la ubicacion + el formato
    "Prompt-Regular": require("./src/assets/fonts/Prompt-Regular.ttf"),
  })

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} newStyles={styles.headerTitle} />
      {content}
    </View>
  );
}

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
