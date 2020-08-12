import React from 'react';
import { Text, View, Button } from 'react-native';

function ReservationsScreen ({navigation}) {
    return (
        <View style={{backgoundColor:"yellow"}}>
            <Text>Reservationsscreen</Text>
            <Button title="Go to badges" onPress={() => navigation.navigate("MyBadges")}/>
            <Button title="Go to visit" onPress={() => navigation.navigate("Visit")}/>
        </View>
    )
}

export default ReservationsScreen