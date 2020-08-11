import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import {Button, Input} from 'react-native-elements';

// import {connect} from 'react-redux';


export default function HomeScreen ({navigation}) {

  const [signInusermail, setSignInusermail] = useState('')
  const [signInuserpwd, setSignInuserpwd] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignin, setErrorsSignin] = useState([])


      var handleSubmitSignin = async () => {
     
        const data = await fetch('http://10.2.3.51:3000/sign-in', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `usermailFromFront=${signInusermail}&userpwdFromFront=${signInuserpwd}`
        })
    
        const body = await data.json();
    
        if(body.result == true){
        //   props.addToken(body.token)
          setUserExists(true)
          navigation.navigate("BottomNavigator")
          
        }  else {
          setErrorsSignin(body.error)
        }
      }
    
    
    
      var tabErrorsSignin = listErrorsSignin.map((error,i) => {
        return(<Text>{error}</Text>)
      })
    

    return (
        <ImageBackground source={require('../assets/background-home.jpg')} style={{flex:1}}>
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>

          <View style={styles.text}>

          <Image source={require('../assets/logo.png')} style={{width:100, height: 120}}/>
            

            <Text style={{fontSize: 50, color: '#FFFFFF'}}> Guidance</Text>

          </View>

            <Input onChangeText={(e) => setSignInusermail(e)}  placeholder="usermail" />

            <Input onChangeText={(e) => setSignInuserpwd(e)} placeholder="userpwd" />
            
            {tabErrorsSignin}

            <Button title= "Connexion" onPress={() => handleSubmitSignin()} style={{width:120}} type="primary"/>
            <Button title="Go to map" onPress={() => navigation.navigate("BottomNavigator")}/>

            <View style={{flexDirection : "row", justifyContent: "center", alignItems: "center"}}>

            <Text> Vous n'avez pas de compte ? </Text>
            <Button type="clear" style={{width: "100%"}} title="Inscription" onPress={() => navigation.navigate("SignUp")}/>

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
        textShadowColor: '#FFFFFF'
        

    }, 
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
  });