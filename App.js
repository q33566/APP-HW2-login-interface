import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './RegistrationPage';
import UserPage from './UserPage';
import React from 'react';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Registration'>
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={{ title: '註冊頁面' }}
        />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{ title: '使用者資訊' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
