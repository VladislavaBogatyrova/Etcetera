import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Input } from '../input';


export const FieldInput = ({ label, placeholder, value, onChange, active, touched, error, ...textInputProps }: TProps) => {

    const showError = !active && touched && !!error
    return <>
        <Text style={styles.fieldTitle}>{label}</Text>
        <Input placeholder={placeholder} value={value} onChange={onChange} textInputProps={textInputProps} />
        <View>
            <Text style={styles.error}>{showError ? error : ' '}</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    fieldTitle: {
        // fontFamily: "Roboto",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#000000",
        marginLeft: 15,
        marginTop: 20,
    },
    error: {
        fontSize: 10,
        color: '#800000',
        lineHeight: 19,
    }
})
type TProps = {
    label: string
    placeholder: string
    value: string
    onChange: (text: string) => void
    active?: boolean,
    touched?: boolean,
    error?: string
    textInputProps?: any
}