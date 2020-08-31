import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {
    const { navigate } = useNavigation();
    const navigateToPersonalInfo = () => navigate('PersonalInfo');
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={images.LOGO_BACK_OFFICE}
            resizeMode="contain"
        >

            <ImageBackground
                style={{ flex: 1 }}
                source={images.RECTANGLE_BACK}
                resizeMode="contain"
            >
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <ImageBackground
                        style={{ aspectRatio: 1.65 }}
                        source={images.BG_TRIANGLES}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.container}>
                    <Image source={images.LOGO_ETCETERA}></Image>
                    <Text style={styles.title}>Welcome!</Text>
                    <Text style={[styles.title, styles.subTitle]}>Want to be a part of team?</Text>
                    <Button onPress={navigateToPersonalInfo}>Send Form</Button>
                    <TouchableOpacity style={styles.infoIcon}><Text style={styles.infoIconI}>i</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.agencyLink}>etcetera upwork agency</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 39,
        paddingTop: 67,
        paddingBottom: 23,
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: 46.3,
        lineHeight: 53,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: "80%",
    },
    subTitle: {
        fontSize: 19.7,
        lineHeight: 37,
        marginTop: "40%",
    },
    infoIcon: {
        height: 32,
        width: 32,
        marginTop: 50,
        borderRadius: 16,
        borderColor: "white",
        borderWidth: 2.6,
        alignItems: "center",
        justifyContent: "center",
    },
    infoIconI: {
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 19.5,
        lineHeight: 28,
        textAlign: "center",
        color: "#FFFFFF",
    },
    agencyLink: {
        fontFamily: "Bebas Neue",
        fontSize: 24,
        lineHeight: 29,
        textDecorationLine: "underline",
        color: "#FFFFFF",
    }
});
