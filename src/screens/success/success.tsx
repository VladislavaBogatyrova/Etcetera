import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View,} from 'react-native';
import images from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

export const Success = () => {
  const { navigate } = useNavigation();
  const navigateToSuccess = () => navigate('Success');

  return (
        <View style={styles.container}>
          <Image source={images.BG_DOUBLE_TRIANGLES} style={styles.topBackgroundImage}/>
          <Image source={images.LOGO_SMALL} style={styles.logo}/>
          <Image source={images.BG_ETCETERA} style={styles.bottomBackgroundImage}/>
            <Text style={styles.text}>Glad to see you, friend!{"\n"}{"\n"}  <Text style={styles.capital}>ETCETERA</Text> started over 6 years ago as the agency on Upwork. We work to help professionals from Ukraine to find international clients, work in a comfortable schedule for them and receive a decent rewards. We focus on clients from the US, UK, EU and other mature markets. The work goes ONLY through the Upwork marketplace. We are not a outsourcing or outstaffing company, or just giving the task "to gig from fence to lunch" and taking the lion's share of earnings. We help and grow a community of professionals who can do cool projects together.
</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
    flex: 1,
    // justifyContent: "space-between",
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
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'justify',
    color: "#000000",
    marginTop: 82.3
  },
  capital: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
    textAlign: 'justify',
    color: "#000000",
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