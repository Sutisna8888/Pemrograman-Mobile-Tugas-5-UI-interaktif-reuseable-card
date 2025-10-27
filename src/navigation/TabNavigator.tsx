import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/TabScreen/Home';
import Profile from '../screens/TabScreen/Profile';
import TicketScreen from "../screens/TabScreen/TicketScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF6A3D',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name="home-outline" size={24} color={color} />; 
          } else if (route.name === 'Tiket') {
            return <Ionicons name="ticket-outline" size={22} color={color} />;
          } else if (route.name === 'Profile') {
            return <FontAwesome name="user-o" size={22} color={color} />;
          }

          return null;
        },
      })}
    >
      <Tab.Screen name="Home"  component={Home} />
      <Tab.Screen name="Tiket"  component={TicketScreen} />
      <Tab.Screen name="Profile"  component={Profile} />
    </Tab.Navigator>
  ); 
};

export default TabNavigator;
