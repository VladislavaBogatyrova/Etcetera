import React from 'react'
import { TextInput, StyleSheet } from 'react-native';


export const Input = () => {
    return <TextInput style={styles.container} />
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#000000',
        height: 37,
        width: '100%'
    }
})