import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View,} from 'react-native';
import images from '../../assets/images';
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const PersonalInfo = () => {
  const { navigate } = useNavigation();
  const navigateToEditPhoto = () => navigate('EditPhoto');

  return <Text>PersonalInfo</Text>;
};
