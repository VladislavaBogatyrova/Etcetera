import React from 'react';
import { Text, Image, StyleSheet, View, } from 'react-native';
import images from '../../assets/images';


export const Header = () => {
    return <>
        <Image source={images.BG_DOUBLE_TRIANGLES} style={styles.topBackgroundImage} />
        <Image source={images.LOGO_SMALL} style={styles.logo} />
        <Image source={images.BG_ETCETERA} style={styles.bottomBackgroundImage} />
    </>
}

const styles = StyleSheet.create({

    topBackgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'contain',
    },
    bottomBackgroundImage: {
        position: "absolute",
        right: -16,
        bottom: 0,
        resizeMode: 'contain',
    },
    logo: {
        marginTop: 19,
    },
});