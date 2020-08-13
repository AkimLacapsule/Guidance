import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Switch } from 'react-native';
import { Button } from 'react-native-elements'
// import { Ionicons } from '@expo/vector-icons';

export default function Quizz(props) {

    const[isDisabled, setIsDisabled] = useState(false);
    const[indexQuestion, setIndexQuestion] = useState(0);

    console.log("je suis l'index", indexQuestion)
    // FROM STORE -> USEEFFECT AU CHARGEMENT
    const[selectedTour, setSelectedTour] = useState(
        {
            _id: "5f32b8c404f5c716406d11e2",
            quizz: [
                {question: "c'est la question A",
                 reponses: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse A"},
                 {question: "c'est la question B",
                 reponses: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse B"},
                 {question: "c'est la question C",
                 reponses: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse C"},
                 {question: "c'est la question D",
                 reponses: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse D"}
            ]
        }
    );
    const[points, setPoints] = useState(0);

useEffect(() => {
    setIsDisabled(false);
}, [indexQuestion])


var displayAnswer = (reponse) => {
    setIsDisabled(true);
    if(reponse==selectedTour.quizz[indexQuestion].win){
        setPoints(points+25)
    }else{
        setPoints(points-10)
    }
}

let QCM = selectedTour.quizz[indexQuestion].reponses.map(reponse => {
    let disabledCouleur = ""
    if (reponse==selectedTour.quizz[indexQuestion].win){
        couleur="#27B226";
    }else{
        couleur="#D22722";
    }
console.log(couleur)
    return <Button
        buttonStyle={{ color: "#000000" }}
        onPress={()=>displayAnswer(reponse)}
        disabled={isDisabled}
        title={reponse}
        type="outline"
        disabledStyle={{ color: disabledCouleur }}
    />

})

let nombreDeQuestions=selectedTour.quizz.length;
let bouton;
if((indexQuestion+1)!=nombreDeQuestions){
    bouton = <Button
            onPress={() => setIndexQuestion(indexQuestion+1)}
            disabled={!isDisabled}
            title="SUIVANT"    
            /> 
} else {
    bouton = <Button
    // onPress={()=>REDIRECTION VERS WINSCREEN}
    disabled={!isDisabled}
    title="SUIVANT"    
            /> 
}

let numero = indexQuestion+1;

return(
    <View style={styles.container}>
        <Text> Question n°{numero}</Text>
        <Text> {selectedTour.quizz[indexQuestion].question}</Text>
        {QCM}
        {bouton}
    </View> 
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});

