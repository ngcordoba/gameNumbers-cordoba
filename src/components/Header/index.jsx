import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"

// enviara como argumento el titulo - hacemos destructuring del objeto para ir tomando unicamente las propiedades que necesitemos del objeto
const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text styles={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;