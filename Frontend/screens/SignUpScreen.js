import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import {Button, Input} from 'react-native-elements';
// import {Link, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';


export default function SignUpScreen ({navigation}) {

  const [signUpuserpseudo, setSignUpuserpseudo] = useState('')
  const [signUpusermail, setSignUpusermail] = useState('')
  const [signUpuserpwd, setSignUpuserpwd] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignup, setErrorsSignup] = useState([])


    var handleSubmitSignup = async () => {
   console.log(signUpuserpseudo, "floiufoufoj")
    
        const data = await fetch('http://10.2.3.51:3000/sign-up', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `userpseudoFromFront=${signUpuserpseudo}&usermailFromFront=${signUpusermail}&userpwdFromFront=${signUpuserpwd}`
        })
    
        const body = await data.json()
        console.log(body)
    
        if(body.result == true){
        //   props.addToken(body.token)
          setUserExists(true)
          
        } else {
          setErrorsSignup(body.error)
        }
      }
    
      var tabErrorsSignup = listErrorsSignup.map((error,i) => {
        return(<p>{error}</p>)
      })

    return (
       <ImageBackground source={require('../assets/background-home.jpg')} style={{flex:1}}>
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>

          <View style={styles.text}>

          <Image source={require('../assets/logo.png')} style={{width:100, height: 120}}/>
            

            <Text style={{fontSize: 50, color: '#FFFFFF'}}> Inscription</Text>
          </View>

            <Input onChangeText={(e)=> setSignUpuserpseudo(e)} placeholder="userpseudo" /> 

            <Input onChangeText={(e) => setSignUpusermail(e)}  placeholder="usermail" />

            <Input onChangeText={(e) => setSignUpuserpwd(e)} placeholder="userpwd" />
            
            {tabErrorsSignup}

            <Button title="Go to map" onPress={() => navigation.navigate("BottomNavigator")}/>

            <View style={{flexDirection : "row", justifyContent: "center", alignItems: "center"}}>

            <Button title= "Annuler" onPress={() => navigation.navigate("Home")} style={{width:120}} type="primary"/> 
            <Button title= "Validation" onPress={() => {handleSubmitSignup(); navigation.navigate("BottomNavigator")}} style={{width:100}} type="primary"/>

            </View>

        </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF'
      

  }, 
  icon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

  },
});