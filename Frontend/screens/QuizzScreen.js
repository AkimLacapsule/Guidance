import React from 'react';
import { Text, View, Button } from 'react-native';
import FooterApp from '../screens/footer';
import HeaderApp from '../screens/Header';

function QuizScreen ({navigation}) {
    return (
        <View style={{flex:1, display:"flex", alignItems:"center"}}>
            <HeaderApp navigation={navigation}/>
            <Text>Quiz</Text>
            <Button color="#57508C" style={{borderRadius:"50%"}} title="Suivant" onPress={() => navigation.navigate("Quiz")}></Button>
            <FooterApp navigation={navigation}/>
        </View>
    )
}

export default QuizScreen
