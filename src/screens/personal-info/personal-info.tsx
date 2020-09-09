import React from 'react';
import { Text, Image, StyleSheet, View,} from 'react-native';
import images from '../../assets/images';
import { Button, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';

export const PersonalInfo = () => {
  const { navigate } = useNavigation();
  const navigateToEditPhoto = () => navigate('EditPhoto');

  return (
        <View style={styles.container}>
          <Image source={images.BG_DOUBLE_TRIANGLES} style={styles.topBackgroundImage}/>
          <Image source={images.LOGO_SMALL} style={styles.logo}/>
          <Image source={images.BG_ETCETERA} style={styles.bottomBackgroundImage}/>
            <Text style={styles.title}>Fill THE FORM</Text>
            <Text style={styles.subtitle}>area with * must be filled</Text>
            <View style={styles.form}>
              <Text style={styles.formTitle}>Personal Info</Text>
              <Text style={styles.fieldTitle}>Full name*</Text>
              <Input placeholder="type your full name"/>
              <Text style={styles.fieldTitle}>Position*</Text>
              <Input placeholder="for example: IOS developer, Designer"/>
              <Text style={styles.fieldTitle}>Your birthday*</Text>
              <Input placeholder="dd.mm.yyyy"/>
              <Text style={styles.fieldTitle}>City*</Text>
              <Input placeholder="Kharkiv"/>
              <Text style={styles.fieldTitle}>Phone number*</Text>
              <Input placeholder="+38 (0_ _) _ _ _ - _ _ - _ _"/>
            </View>
          <Button onPress={navigateToEditPhoto}>Next</Button>
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
    marginTop: 75.3,
    marginBottom: 0,
  },
  subtitle: {
    // fontFamily: "Roboto",
    fontSize: 10,
    lineHeight: 12,
    color: "#000000",
    marginTop: -6,
  },
  formTitle: {
    fontFamily: "Bebas Neue",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 26,
    color: "#00662B",
    marginTop: 27,
  },
  form: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20,
  },
  fieldTitle: {
    // fontFamily: "Roboto",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
    marginLeft: 15,
    marginTop: 20,
  },
  // button: {
  //   marginTop: 20,
  // },
});