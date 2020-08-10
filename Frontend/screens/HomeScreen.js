import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import {Button, Input} from 'react-native-elements';
// import {Link, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';


export default function HomeScreen ({navigation}) {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignin, setErrorsSignin] = useState([])


      var handleSubmitSignin = async () => {
     
        const data = await fetch('/sign-in', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
        })
    
        const body = await data.json();
    
        if(body.result == true){
        //   props.addToken(body.token)
          setUserExists(true)
          
        }  else {
          setErrorsSignin(body.error)
        }
      }
    
    //   if(userExists){
    //     return <Redirect to='/MapScreen' />
    //   }
    
      var tabErrorsSignin = listErrorsSignin.map((error,i) => {
        return(<p>{error}</p>)
      })
    

    return (
        <ImageBackground source={require('../assets/background-home.jpg')} style={{flex:1}}>
        <View style={{flex:1}}>
            

            <Text> Guidance</Text>

            <Input onChange={(e) => setSignInEmail(e.target.value)}  placeholder="email" />

            <Input onChange={(e) => setSignInPassword(e.target.value)}  placeholder="password" />
            
            {tabErrorsSignin}

            <Button title= "Sign-In" onPress={() => handleSubmitSignin()}  style={{width:80}} type="primary"/>

            <Text> Vous n'êtes pas encore des nôtres ? <Button style={{flex:1}} title="Go to SignUp" onPress={() => navigation.navigate("/SignUpScreen")}/></Text>
            
           
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }, 
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
  });