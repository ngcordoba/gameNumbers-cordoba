import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

import Card from '../../components/Card'
import win from "../../assets/images/youWin.jpg"
import lose from "../../assets/images/youLose.jpg"

const ResultScreen = ({ result }) => {

    const [image, setImage] = useState("");

    useEffect(() => {
        handleImage();
    }, []);

    const handleImage = () => {
        if (result === "win") {
            setImage(win)
        }
        setImage(lose);
    };

    return (
        <SafeAreaView>
            <View>
                <Card>
                    <Text>{`You ${result}`}</Text>
                    <Image style={styles.imageContainer} source={image} />
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default ResultScreen;