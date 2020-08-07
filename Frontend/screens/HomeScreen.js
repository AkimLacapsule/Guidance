import React from 'react';
import { Text, View, Button } from 'react-native';


function HomeScreen ({navigation}) {
    return (
        <View style={{backgoundColor:"red"}}>
            <Text>Homecreen</Text>
            <Button title="Go to map" onPress={() => navigation.navigate("BottomNavigator")}/>
        </View>
    )
}

export default HomeScreen