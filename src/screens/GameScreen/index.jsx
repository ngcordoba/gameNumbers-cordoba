import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from "react";

import Card from '../../components/Card';
import styles from './styles';

const GameScreen = ({ handleResult }) => {
    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>La suposicion del oponente es</Text>
            <Text style={styles.numberSelected}>{currentGuess}</Text>
            <View style={styles.container}>
                <Card>
                    <Text style={styles.subtitle}>¿El numero es mayor o menor?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonLower}
                            onPress={() => handleResult("lower", currentGuess)}>
                            <Text style={styles.textTitle}>Mas bajo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonHigh}
                            onPress={() => handleResult("higher", currentGuess)}>
                            <Text style={styles.textTitle}>Mas alto</Text>
                        </TouchableOpacity>

                    </View>
                </Card>

            </View>
        </View>
    )
}

export default GameScreen;