import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import FooterApp from '../screens/footer';

function MonumentScreen ({navigation}) {
    return(
        <View style={{flex:1}}>
            <Card style={{position:"absolute"}} image={require('../assets/background-home.jpg')}>       
                <Text style={{fontWeight:"bold", fontSize:18, textTransform:"uppercase", textAlign:"center"}}>Intérieur</Text>   
            </Card>
            <Card style={{position:"absolute"}} image={require('../assets/background-home.jpg')}>       
                <Text style={{fontWeight:"bold", fontSize:18, textTransform:"uppercase", textAlign:"center"}}>Extérieur</Text>   
            </Card>
            <FooterApp navigation={navigation}/>
        </View>
    
    )
}

export default MonumentScreen