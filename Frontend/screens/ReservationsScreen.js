import React from 'react';
import { Text, View, Button } from 'react-native';

function ReservationsScreen ({navigation}) {
    return (
        <View style={{backgoundColor:"yellow"}}>
            <Text>Reservationsscreen</Text>
            <Button title="Go to badges" onPress={() => navigation.navigate("MyBadges")}/>
        </View>
    )
}

export default ReservationsScreen