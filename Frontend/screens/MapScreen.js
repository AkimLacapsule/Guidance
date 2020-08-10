import React, { useEffect , useState }from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import MapView  from 'react-native-maps';
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';


export default function MapScreen () {

    const [lattitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);


    useEffect(() => {
        const Ask = async ()=>{
             let { status } = await Permissions.askAsync(Permissions.Location);
            if(status === "granted"){
                return await Location.getCurrentPositionAsync({latitude,longitude});
        }}
     
    }, [])

    return (
        <MapView style={styles.Map}>
            <Text>lalallaa</Text>
        </MapView>
    )
}

const styles = StyleSheet.create({
    Map:{
        width:"100%",
        height:"100%"
    }
})

