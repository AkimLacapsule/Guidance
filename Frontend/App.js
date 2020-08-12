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
import FooterApp from './screens/footer';


import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import token from './reducers/token';



const store = createStore(combineReducers({token}));
console.log(store.getState(), 'STORE INSIDE')

// var BottomNavigator = createBottomTabNavigator ({
//   Explorer: MapScreen,
//   Favoris: FavoritesScreen,
//   Visites: ReservationsScreen
// },
//   {
//     defaultNavigationOptions:({navigation}) => ({
//     tabBarIcon: ({tintColor}) => {
//       var iconName;
//       if(navigation.state.routeName == "Explorer"){
//         iconName = "md-compass";
//       }else if(navigation.state.routeName == "Favoris"){
//         iconName = "md-heart-empty";
//       }else if(navigation.state.routeName == "Visites"){
//         iconName = "md-calendar";
//       }
//       return <Ionicons name={iconName} size={25} color={tintColor}/>
//     }
// }),
// tabBarOptions: {
//   activeTintColor: '#20D3D3',
//   inactiveTintColor: '#FFFFFF',
//   style: {
//     backgroundColor: '#4D3D84',
//   }
// }  

// });

var StackNavigator = createStackNavigator ({
  Home:HomeScreen,
  Map: MapScreen,
  MyBadges:ListBadgeScreen,
  SignUp: SignUpScreen,
  Favorites: FavoritesScreen,
  Reserve: ReservationsScreen,
  Plan: PlanScreen,
  Quizz: QuizzScreen,
},{headerMode:"none"})

const Navigation = createAppContainer(StackNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
 }

