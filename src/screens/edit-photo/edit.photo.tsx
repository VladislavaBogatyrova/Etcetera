import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View, } from 'react-native';
import images from '../../assets/images';
import { Button, Input, Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const EditPhoto = () => {
  const { navigate } = useNavigation();
  const navigateToWorkExperience = () => navigate('WorkExperience');

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>TAKE A PHOTO</Text>
      <View style={styles.cameraContainer}>
        <View style={styles.cameraFrame}>
          <Image source={images.CAMERA} style={styles.camera} />

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