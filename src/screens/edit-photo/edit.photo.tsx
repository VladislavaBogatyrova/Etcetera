import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View,} from 'react-native';
import images from '../../assets/images';
import { Button, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const EditPhoto = () => {
  const { navigate } = useNavigation();
  const navigateToWorkExperience = () => navigate('WorkExperience');

  return (
        <View style={styles.container}>
          <Image source={images.BG_DOUBLE_TRIANGLES} style={styles.topBackgroundImage}/>
          <Image source={images.LOGO_SMALL} style={styles.logo}/>
          <Image source={images.BG_ETCETERA} style={styles.bottomBackgroundImage}/>
            <Text style={styles.title}>TAKE A PHOTO</Text>
            <View style={styles.cameraContainer}>
              <View style={styles.cameraFrame}>
                <Image source={images.CAMERA} style={styles.camera}/>
                {/* <Text style={styles.formTitle}>Personal Info</Text>
                <Text style={styles.fieldTitle}>Full name*</Text>
                <Input placeholder="type your full name"/>
                <Text style={styles.fieldTitle}>Position*</Text>
                <Input placeholder="for example: IOS developer, Designer"/>
                <Text style={styles.fieldTitle}>Your birthday*</Text>
                <Input placeholder="dd.mm.yyyy"/>
                <Text style={styles.fieldTitle}>City*</Text>
                <Input placeholder="Kharkiv"/>
                <Text style={styles.fieldTitle}>Phone number*</Text>
                <Input placeholder="+38 (0_ _) _ _ _ - _ _ - _ _"/> */}
              </View>
              <Button white onPress={navigateToWorkExperience}>Retake Photo</Button>
            </View>
          <Button onPress={navigateToWorkExperience}>Next</Button>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
  },
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
  title: {
    fontFamily: "Bebas Neue",
    fontSize: 36,
    lineHeight: 43,
    color: "#000000",
    // marginTop: 75.3,
    // marginBottom: 0,
  },
  cameraContainer: {
    height: 398,
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  cameraFrame: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 336,
    marginBottom: 12,
    // marginTop: 39,
    backgroundColor: "#C4C4C4",
  },
  camera: {
    width: 147,
    height: 119.44,
  },
});