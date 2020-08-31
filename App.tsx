
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import {Welcome, YourHobbies, PersonalInfo, EditPhoto, WorkExperience } from '@screens/';
import { Welcome, YourHobbies, PersonalInfo, EditPhoto, WorkExperience } from './src/screens';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          title: '',
          headerShown: false,
        }} />
        <Stack.Screen name="YourHobbies" component={YourHobbies} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="EditPhoto" component={EditPhoto} />
        <Stack.Screen name="WorkExperience" component={WorkExperience}
        />
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
