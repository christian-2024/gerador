import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";

import {Ionicons} from '@expo/vector-icons'; // Importa os ícones do expo

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarShowLabel: false, // Oculta o nome do botão
        headerShown: false, // Oculta o cabeçalho
        tabBarIcon: ({ focused, size, color }) => { // esse é o ícone do Home
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
        }
      }} />
      <Tab.Screen 
      name="Passwords" 
      component={Passwords}
      options={{ 
        tabBarShowLabel: false, // Oculta o nome do botão
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => { // esse é o ícone do Passwords
            if (focused) {
              return <Ionicons name="lock-closed" size={size} color={color} />
            }
            return <Ionicons name="lock-closed-outline" size={size} color={color} />
        }
      }} />
    </Tab.Navigator>
  );
}