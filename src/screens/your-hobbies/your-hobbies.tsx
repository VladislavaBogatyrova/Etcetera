import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View, CheckBox,} from 'react-native';
import images from '../../assets/images';
import { Button, Input, Checkbox } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const YourHobbies = () => {
  const { navigate } = useNavigation();
  const navigateToSuccess = () => navigate('Success');

  return (
        <View style={styles.container}>
          <Image source={images.BG_DOUBLE_TRIANGLES} style={styles.topBackgroundImage}/>
          <Image source={images.LOGO_SMALL} style={styles.logo}/>
          <Image source={images.BG_ETCETERA} style={styles.bottomBackgroundImage}/>
            <Text style={styles.title}>Fill THE FORM</Text>
            <Text style={styles.subtitle}>area with * must be filled</Text>
            <View style={styles.form}>
              <Text style={styles.formTitle}>Your Hobbies</Text>
              <Text style={styles.fieldTitle}>How you spend your free time?</Text>
              <Input placeholder="hobbies, sport, etc..." style={styles.field}/>
              <Text style={styles.formTitle}>Additional Information</Text>
              <Text style={styles.fieldTitle}>Have any questions for us?</Text>
              <Input placeholder="Be in touch :)" style={styles.field}/>
            </View>
          <Checkbox/>
          <Button onPress={navigateToSuccess}>Next</Button>
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
  field :{
    height: 173,
  },
  checkBox: {
    borderRadius: 0,
    color: "#00662B",
  },
  // button: {
  //   marginTop: 20,
  // },
});