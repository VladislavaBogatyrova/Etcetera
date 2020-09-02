
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import {Welcome, YourHobbies, PersonalInfo, EditPhoto, WorkExperience } from '@screens/';
import { Welcome, YourHobbies, PersonalInfo, EditPhoto, WorkExperience } from './src/screens';
import { View } from 'react-native';
import { IconButton } from './src/components';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{

        headerLeft: (props:any) => <IconButton {...props} />,
        headerBackTitleVisible: false,
      }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          title: '',
          headerShown: false,
        }} />
        <Stack.Screen name="YourHobbies" component={YourHobbies} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{
          title: '',
          headerTransparent: true,
        }} />
        <Stack.Screen name="EditPhoto" component={EditPhoto} />
        <Stack.Screen name="WorkExperience" component={WorkExperience}
        />
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
