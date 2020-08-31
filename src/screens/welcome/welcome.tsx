import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View,} from 'react-native';
import images from '../../assets/images';
import icons from '../../assets/icons';
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        style={styles.container}
        source={images.RECTANGLE_BACK}
        resizeMode="contain"
      >
        <Image source={images.LOGO_ETCETERA}></Image>
        <Text>Welcome!</Text>
        <Text>Want to be a part of team?</Text>
        <Button onPress={navigateToPersonalInfo}>Send Form</Button>
        <TouchableOpacity><View style={styles.infoIcon}><Text style={styles.infoIconI}>i</Text></View></TouchableOpacity>
        <TouchableOpacity><Text style={styles.agencyLink}>etcetera upwork agency</Text></TouchableOpacity>
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
