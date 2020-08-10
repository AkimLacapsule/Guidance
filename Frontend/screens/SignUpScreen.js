import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import {Button, Input} from 'react-native-elements';
// import {Link, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';


export default function SignUpScreen ({navigation}) {

  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignup, setErrorsSignup] = useState([])


    var handleSubmitSignup = async () => {
    
        const data = await fetch('/sign-up', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
        })
    
        const body = await data.json()
    
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
        <ImageBackground source={require('../assets/background-home.jpg')} style={styles.container}>
        <View style={styles.container}>
            

            <Text>Inscription</Text>         
                  
            <Input onChange={(e) => setSignUpUsername(e.target.value)}  placeholder="username" />

            <Input onChange={(e) => setSignUpEmail(e.target.value)} placeholder="email" />

            <Input onChange={(e) => setSignUpPassword(e.target.value)} placeholder="password" />
      
            {tabErrorsSignup}

            <Button title= "Sign-Up" onPress={() => handleSubmitSignup()} style={{width:100}} type="primary"/>

            <Button title="Go to map" onPress={() => navigation.navigate("BottomNavigator")}/>
           
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
  });