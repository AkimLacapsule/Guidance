import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

function BadgesScreen () {

    var badgesList = [
        { points:0 ,src:"../assets/badge-0-miles.jpg"},
        { points:50 ,src:"../assets/badge-50-miles.jpg"},
        { points:100 ,src:"../assets/badge-100-miles.jpg"},
        { points:200 ,src:"../assets/badge-200-miles.jpg"},
        { points:300 ,src:"../assets/badge-300-miles.jpg"},
        { points:500 ,src:"../assets/badge-500-miles.jpg"},
        { points:700 ,src:"../assets/badge-700-miles.jpg"},
        { points:1000 ,src:"../assets/badge-1000-miles.jpg"},
        { points:1250 ,src:"../assets/badge-1250-miles.jpg"},
        { points:1500 ,src:"../assets/badge-1500-miles.jpg"},
        { points:2000 ,src:"../assets/badge-2000-miles.jpg"}
    ];

    var mybadges = []

    useEffect(()=>{
        async function calculPoint(){
            var rawResponse = await fetch ("http://10.2.3.92:3000/points-counter");
            var response = await rawResponse.json();
            for (var i=0; badgesList.length ; i++) {
                if(response.points>badgesList[i].points){
                    mybadges.push(badgesList[i].src);
                }
            }
        }calculPoint()
    },[]);

    

    return (
        <View>
            <Text>Badgesscreen</Text>
        </View>
    )
}

export default BadgesScreen