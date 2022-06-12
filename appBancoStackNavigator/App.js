import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Info from './src/pages/Info';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Abertura de Conta',
          headerStyle:{
            backgroundColor: '#9CAFB7',
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen 
        name="Info" 
        component={Info}
        options={{
          title:'Dados Informados',
          headerStyle:{
            backgroundColor: '#F7F7F7',
          },
          headerTintColor: '#1BA4B9',
          headerTitleAlign: 'center',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;