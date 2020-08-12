import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Modal, Switch } from 'react-native';
// import { ListItem, Header, CheckBox, Slider } from 'react-native-elements'
// import { Ionicons } from '@expo/vector-icons';

export default function Quizz(props) {

    const[isDisabled, setIsDisabled] = useState(false);
    const[couleurMauvaiseRep, setCouleurMauvaiseRep] = useState('#000000')
    const[couleurBonneRep, setCouleurBonneRep] = useState('#000000')
    const[numQuestion, setNumQuestion] = useState(1);

    // FROM STORE -> USEEFFECT AU CHARGEMENT
    const[selectedTour, setSelectedTour] = useState(
        {
            _id: "5f32b8c404f5c716406d11e2",
            quizz: [
                {question: "c'est la question B",
                 reponse: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse B"},
                 {question: "c'est la question A",
                 reponse: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse B"},
                 {question: "c'est la question C",
                 reponse: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse C"},
                 {question: "c'est la question D",
                 reponse: ["reponse A" , "reponse B", "reponse C", "reponse D"],
                 win: "reponse D"}
            ]
          },
    );
    const[points, setPoints] = useState(0);

useEffect(() => {
    setIsDisabled(false);
    setCouleurMauvaiseRep('#000000')
    setCouleurBonneRep('#000000')

}, [numQuestion])


var displayAnswer = (reponse) => {
    setIsDisabled(true);
    if(reponse==selectedTour.quizz[numQuestion-1].win){
        setCouleurBonneRep("#27B226")
        setPoints(points+25)
    }else{
        setCouleurBonneRep("#27B226")
        setCouleurMauvaiseRep("#D22722")
        setPoints(points-10)
    }
}

let QCM = selectedTour.quizz[numQuestion-1].reponses.map(reponse => {
    let couleur = ""
    if (reponse==selectedTour.quizz[numQuestion-1].win){
        couleur=couleurBonneRep;
    }else{
        couleur=couleurMauvaiseRep;
    }

    return <Button
        color={couleur}
        onPress={()=>displayAnswer(reponse)}
        disabled={isDisabled}
        title={reponse}    
    />

})

let nombreDeQuestions=selectedTour.quizz.length;
let bouton;
if(numQuestion==nombreDeQuestions){
    bouton = <Button
    onPress={()=>setNumQuestion(numQuestion+1)}
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


return(
    <View style={styles.container}>
        <ButtonGroup 
        buttons={QCM}
        selectedButtonStyle={{backgroundColor:"white",borderWidth:1,borderColor:"#57508C"}}
        containerStyle={{height:50,width:300,borderRadius:10,backgroundColor:"#57508C"}}
        selectedIndex={selectedIndex}
        selectedTextStyle={{color:"#57508C"}}
        textStyle={{color:"white"}}
        >
        </ButtonGroup>

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


export default QuizScreen
