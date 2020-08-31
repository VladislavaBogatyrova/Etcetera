import React from 'react'
import { Text, Image, ImageBackground, StyleSheet } from 'react-native'
import images from '../../assets/images'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'

export const Welcome = () => {
    const { navigate } = useNavigation()
    return <ImageBackground style={{ flex: 1 }} source={images.LOGO_BACK_OFFICE} resizeMode="contain" >

        <ImageBackground style={styles.container} source={images.RECTANGLE_BACK} resizeMode="contain" >
            <Button>
                Send Form
</Button>
        </ImageBackground>
    </ImageBackground>
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    }
})