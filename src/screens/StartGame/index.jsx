import { View, Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import React, { useState } from "react";

import styles from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';


const StartGame = ({ onStartGame }) => {

  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInput = text => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetInput = () => {
    setValue("");
    setConfirm(false);
  };

  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if (value === "") {
      alert("No puede dejar el campo vacio")
    } else if (isNaN(newValue)) {
      alert("El valor ingresado no es un numero")
    } else if (newValue <= 0 || newValue > 99) {
      alert("El numero que ingresaste debe estar entre 1 y 99")
    } else {
      setConfirm(true);
      setSelectedNumber(newValue);
      setValue("");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.subtitle}> Ingresa un numero para comenzar! </Text>
            <Input
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              eyboardType="numeric"
              maxLenght={2}
              placeHolder="Su numero"
              value={value}
              onChangeText={handleInput}
            />

            <View style={styles.buttonContainer}>

              <TouchableOpacity
                style={styles.cleanButton}
                onPress={handleResetInput}
              >
                <Text style={styles.buttonText}>Borrar</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirmation}
              >
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </Card>

          {confirm && (
            <Card otherStyles={styles.selectedCard}>
              <Text style={{ color: "black", fontFamily: "Prompt-Regular" }}> El numero seleccionado es  </Text>
              <View style={styles.containerConfirm}>
                <Text style={styles.textSelectedNumber}> {selectedNumber} </Text>
              </View>
              <View style={styles.buttonContainerConfirm}>

                <TouchableOpacity
                  style={styles.startGameButton}
                  onPress={() => onStartGame(selectedNumber)}
                >
                  <Text style={styles.buttonText}>Comenzar</Text>
                </TouchableOpacity>

              </View>
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default StartGame;