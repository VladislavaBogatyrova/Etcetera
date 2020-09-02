import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '../icon';
import { useNavigation } from '@react-navigation/native';
// import { Icon } from '@components';


const hitSlop = { top: 16, right: 16, bottom: 16, left: 16 }


export const IconButton = (props: any) => {
    const { goBack } = useNavigation()
    return <TouchableOpacity style={styles.container} onPress={goBack} hitSlop={hitSlop}>
        <Icon name="arrow_back" size={18} color="#00662B" />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 26
    }
})