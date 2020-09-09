import React from 'react'
import { TextInput, StyleSheet, StyleProp, ViewStyle, } from 'react-native';


export const Input = ({ placeholder, onChange, value, textInputProps, style, numberOfLines = 1 }: TProps) => {
    return <TextInput placeholder={placeholder} style={[styles.container,style]} onChangeText={onChange} numberOfLines={numberOfLines} multiline value={value} {...textInputProps} />

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
    numberOfLines?: number,
    style?: StyleProp<ViewStyle>
}