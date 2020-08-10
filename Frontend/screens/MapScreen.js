import React, { useEffect , useState }from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import MapView , { Marker } from 'react-native-maps';
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';


export default function MapScreen () {

    const [latitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);


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
        console.log(latitude)

    return (
        <MapView style={styles.Map} region={{latitude:latitude,longitude:longitude}}>
          <Marker coordinate={{latitude:latitude,longitude:longitude,latitudeDelta:latitude,longitudeDelta:longitude}} title="tu es la , hey"   description="tu es la"/>
        </MapView>
    )
}

const styles = StyleSheet.create({
    Map:{
        width:"100%",
        height:"100%"
    }
})

