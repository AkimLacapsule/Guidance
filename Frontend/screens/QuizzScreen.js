import React from 'react';
import { Text, View, Button } from 'react-native';

function QuizzScreen ({navigation}) {
    return (
        <View style={{backgoundColor:"yellow"}}>
            <Text style={{marginLeft:100, marginTop:"40%", marginBottom:"2%", fontSize:"30%"}}>Quizz Screen</Text>
            <Button title="Go to badges" onPress={() => navigation.navigate("MyBadges")}/>
            <Button title="Go to Classement" onPress={() => navigation.navigate("Classement")}/>

        </View>
    )
}

export default QuizzScreen;