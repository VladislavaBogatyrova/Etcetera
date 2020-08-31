import React from 'react'
import { TouchableHighlight, StyleSheet, Text } from 'react-native'

export const Button = ({
    children: label
}: TProps) => {
    return <TouchableHighlight style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    container: {
        height: 53.65,
        width: '100%',
        backgroundColor: '#00662B',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#FFFFFF',
        fontSize: 22
    }
})
type TProps = {

    children: string

}