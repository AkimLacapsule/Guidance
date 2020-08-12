import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import FooterApp from '../screens/footer';
import HeaderApp from '../screens/Header';

function MonumentScreen ({navigation}) {
    return(
        <View style={{flex:1}}>
            
            <HeaderApp navigation={navigation}/>

            <View style={{display:"flex", flexDirection:"row", marginLeft:10, paddingTop:10 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#57508C"/>
                <Text style={{marginLeft:5}}>Accueil</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Card image={require('../assets/background-home.jpg')}>       
                <Text style={{fontWeight:"bold", fontSize:18, textTransform:"uppercase", textAlign:"center"}}>Intérieur</Text>   
            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Card image={require('../assets/background-home.jpg')}>     
                <Text style={{fontWeight:"bold", fontSize:18, textTransform:"uppercase", textAlign:"center"}}>Extérieur</Text>   
            </Card>
            </TouchableOpacity>

            <FooterApp navigation={navigation}/>

        </View>
    
    )
}

export default MonumentScreen