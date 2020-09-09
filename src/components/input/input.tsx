import React from 'react'
import { TextInput, StyleSheet } from 'react-native';


export const Input = ({ placeholder, onChange, value, textInputProps }: TProps) => {
    return <TextInput placeholder={placeholder} style={[styles.container]} onChangeText={onChange} value={value} {...textInputProps} />
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#000000',
        height: 37,
        width: '100%',
        borderRadius: 3,
        paddingLeft: 15
    }
})
type TProps = {
    placeholder: string
    onChange: (test: string) => void
    value: string
    textInputProps?: any
}