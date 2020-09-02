import React from 'react'
import { TextInput, StyleSheet } from 'react-native';


export const Input = ({placeholder}) => {
    return <TextInput placeholder={placeholder} style={styles.container} />
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#000000',
        height: 37,
        width: '100%',
        borderRadius: 3,
        
    }
})