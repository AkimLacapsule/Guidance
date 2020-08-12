console.disableYellowBox = true;
import React, { useEffect , useState }from 'react';
import { Text, View ,StyleSheet ,Image} from 'react-native';
import MapView , { Marker } from 'react-native-maps';
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';
import { Header ,SearchBar,ButtonGroup} from "react-native-elements";
import  { Ionicons } from "react-native-vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import Filter from "../screens/FilterScreen";
import FooterApp from '../screens/footer';

export default function MapScreen ({navigation}) {

  // ETATS
    const [latitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);
    const [inputValue,setInputValue] = useState("")
    const [filters, setFilters] = useState({
        categories : [{state: true,
            signification: "Monuments"},
           {state: true,
            signification: "Musées"},
          {state: true,
            signification: "Parcs et Jardins"}
          ],
        price: 50,
        showClosed: false
      });
    const [visibleModal, setVisibleModal]= useState(false);
    const [tourList, setTourList] = useState([]);

// Fonction reverseDataFlow
    var userFilter = (obj, hideModal) => {
        setVisibleModal(hideModal);
        setFilters(obj)
    }

// USEEFFECT PERMISSION LOCALISATION
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

// USEEFFECT DES FILTRES
    useEffect( () => {
        console.log("je passe dans le useEffect des filtres")
        let getToursWithFilters = async () => {

        const response = await fetch('http://10.2.3.47:3000/display-filtered-tours', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `categories=${JSON.stringify(filters.categories)}&price=${filters.price}&showClosed=${filters.showClosed}`
        })
        
        const jsonResponseFilter = await response.json()
        console.log("reponse du back in front", jsonResponseFilter);
        setTourList(jsonResponseFilter.result) 
      }
      getToursWithFilters();
      }, [filters])

      useEffect( () => {
        console.log("je passe dans le useEffect de l'input")
        let getToursWithInput = async () => {
        const response = await fetch('http://10.2.3.47:3000/display-input-tours', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `title=${inputValue}`
        })
        const jsonResponseInput = await response.json()
        setTourList(jsonResponseInput.result) 
      }
        getToursWithInput();
      }, [inputValue])

  // Boucle marker
  let markerList = tourList.map((tour, i) => {
    let color
    switch (tour.category) {
      case "Monuments" : color="orange"; break;
      case "Musées" : color="blue"; break;
      case "Parcs et Jardins" : color="green"; break;     
      default : color="red"
    }
      return <Marker 
        key={i}
        pinColor={color}
        coordinate={{
        latitude:tour.location.latitude,
        longitude:tour.location.longitude,
        latitudeDelta:latitude,
        longitudeDelta:longitude
                    }}
        title={tour.title}
        />
      })

     console.log("voici les tours selectionnés", tourList);

    return (

       <View style={{flex:1}}>
            <Header backgroundColor={styles.header.color} 
            leftComponent={<FontAwesome name="user-circle-o" size={24} color="white" />}
            rightComponent={<Ionicons name="ios-chatboxes" size={24} color="white" />}
            centerComponent={<Image   style={{height:"70%",width:"15%"}}  source={require("../assets/logo.png")}></Image>
            }
            />
           
           <View style={{backgroundColor:"grey", height:60, dispay:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
            <View style={{display:"flex", flexDirection:"row"}}><Ionicons name="ios-options" size={24} color="black"  onPress={()=>setVisibleModal(true)} />
                    <Text>Filter</Text>
            </View>
                     <View 
                              style={{width:200, height:50,borderRadius:50,backgroundColor:"grey"}}>
                              <SearchBar  containerStyle= {{
                                                              borderRadius:50,height:38,backgroundColor:"grey"}} 
                                                              inputContainerStyle= {{borderRadius:50, height:"100%"}}
                                                              inputStyle={{height:100}}
                                    placeholder="Ville,monument.." 
                                    onChangeText={(value)=>setInputValue(value)} value={inputValue}>
                               </SearchBar>
                    </View>
           </View>

          { /*  <Header 
             containerStyle={{height:"7%"}}
             leftContainerStyle={{alignItems:"center",height:"150%",marginLeft:-20}}
             rightContainerStyle={{alignItems:"center",marginRight:60, width: "50%"}}
             leftComponent={<Ionicons name="ios-options" size={24} color="white"  />}
             rightComponent={ <SearchBar   placeholder="mysearch" />}
             />
          */}

        <MapView style={styles.Map} region={{latitude:latitude,longitude:longitude}}>
          {markerList}
          <Marker coordinate={{
            latitude:latitude,
            longitude:longitude,
            latitudeDelta:latitude,
            longitudeDelta:longitude
            }}
             title="tu es la "   description="tu es la"/>
        </MapView>

        <FooterApp navigation={navigation}/>

        

        <Filter visible={visibleModal} userFilterParent={userFilter}/>
        
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
        alignItems:"center"
    }

})

