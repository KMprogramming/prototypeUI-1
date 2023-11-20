// Donel Mukiza and Karl Macayan
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import SplashScreen from './components/SplashScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="Home" 
          component={MainScreen}
          options={{
            title: 'Personal Restaurant Guide',
          }}
        />
        {/* Other screens can be added here */}
    
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;