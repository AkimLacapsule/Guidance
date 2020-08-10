console.disableYellowBox = true;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import MonumentScreen from './screens/MonumentScreen';
import PlanScreen from './screens/PlanScreen';
import QuizzScreen from './screens/QuizzScreen';
import WinScreen from './screens/WinScreen';
import BadgeScreen from './screens/BadgeScreen';
import ListBadgeScreen from './screens/ListBadgeScreen';
import ClassementScreen from './screens/ClassementScreen';
import AccountScreen from './screens/AccountScreen';
import AvatarScreen from './screens/AvatarScreen';
import SignUpScreen from './screens/SignUpScreen'; 

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


// const store = createStore(combineReducers({?????}));


var BottomNavigator = createBottomTabNavigator ({
  Maps: MapScreen,
  Favorites: FavoritesScreen,
  Reservations: ReservationsScreen, 
  
})

var StackNavigator = createStackNavigator ({
  Home:HomeScreen,
  SignUp: SignUpScreen,
  BottomNavigator: BottomNavigator
},{headerMode:"none"})

export default Navigation = createAppContainer(StackNavigator);

