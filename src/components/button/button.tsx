import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

export const Button = ({ children: label, onPress, white, style }: TProps) => {
    const containerStyle = useMemo(() => [styles.container, white && styles.white, style], [])
    
    const labelStyle = useMemo(() => [styles.label, white && styles.labelWhite], [])

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 53.65,
        width: '100%',
        backgroundColor: '#00662B',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    white:
    {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#00662B',
        borderRadius: 10
    },
    label: {
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: "Roboto",
        lineHeight: 28,
    },
    labelWhite:{
        color: '#00662B'
    }
});
type TProps = {
    children: string;
    onPress: () => void
    white?: boolean
    style?: StyleProp<ViewStyle>
};