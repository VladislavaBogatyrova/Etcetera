import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle, View } from 'react-native';

export const Checkbox = ({value, setValue}: TProps) => {
    

    return (
        <TouchableOpacity onPress={setValue} style={styles.checkbox}>
                <View style={styles.checkboxChecked}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        width: 17,
        height: 17,
        borderColor: "#00662B",
        borderWidth: 3,
        margin: 5,
    },
    checkboxChecked: {
    },
});
type TProps = {
    value:boolean
    setValue: () => void
};