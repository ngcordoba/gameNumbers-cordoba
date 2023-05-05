import { TextInput } from 'react-native'
import React from 'react'
import styles from './style'

const Input = ({ otherStyles, ...restProps }) => {
    return <TextInput style={{ ...styles.input, ...otherStyles }} {...restProps} />

}

export default Input