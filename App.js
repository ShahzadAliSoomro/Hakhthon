import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import Menu1 from './screens/menu1';
import HomeScreen from './screens/HomeScreen';
import Productpage from './screens/productpage';
import CheckoutScreen from './screens/CheckoutScreen';
import SplashScreen from './screens/splash';
import OrderScreen from './screens/OrderScreen';
import Oneproduct from './screens/oneproduct';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' >
        <Stack.Screen       
        options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen} />
          <Stack.Screen name='SignupScreen' component={SignupScreen} initialRouteName="SignupScreen" />
          <Stack.Screen name='LoginScreen' component={LoginScreen} initialRouteName="LoginScreen" />
          
          
          <Stack.Screen name='HomeScreen' component={HomeScreen} initialRouteName="HomeScreen" />
          <Stack.Screen name='Productpage' component={Productpage} initialRouteName="Productpage" />
          <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} initialRouteName="CheckoutScreen" />
          <Stack.Screen name='OrderScreen' component={OrderScreen} initialRouteName="OrderScreen" />
          <Stack.Screen name='Oneproduct' component={Oneproduct} initialRouteName="Oneproduct" />
          <Stack.Screen name='menu1' component={Menu1} initialRouteName="Menu1" />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;