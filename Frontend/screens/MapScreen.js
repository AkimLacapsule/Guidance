import React, { useEffect , useState }from 'react';
import { Text, View ,StyleSheet ,Image} from 'react-native';
import MapView , { Marker } from 'react-native-maps';
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';
import { Header } from "react-native-elements";
import  { Ionicons } from "react-native-vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 

export default function MapScreen () {

    const [latitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);
    console.log(latitude,longitude)


    useEffect(() => {
        const ask = async ()=>{
             let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if(status === "granted"){
             var location = await  Location.getCurrentPositionAsync({})
             setLatitude(location.coords.latitude)
             setLongitude(location.coords.longitude)
            }
        }
     ask()
        }, [])

    return (
        <View>
                  <Header backgroundColor={styles.header.color}  >
                 <FontAwesome name="user-circle-o" size={24} color="white" />
                 <Ionicons name="ios-chatboxes" size={24} color="white" />
           </Header>

        <MapView style={styles.Map} region={{latitude:latitude,longitude:longitude}}>
        
          <Marker coordinate={{
            latitude:latitude,
            longitude:longitude,
            latitudeDelta:latitude,
            longitudeDelta:longitude
            }}
             title="tu es la "   description="tu es la"/>
        </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    Map:{
        width:"100%",
        height:"100%"
    },
    header:{
        color:"#4D3D84",
        flex: 1,
    }

})

