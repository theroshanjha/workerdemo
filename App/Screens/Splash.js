import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const Splash = ({navigation})=>{
   useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Home")
    }, 3000);
   },[])

  return(
    <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}>
          <Text style={{ justifyContent: "center", alignSelf: "center", color: "#000", fontSize: 20 }}>Worker App</Text>
         <ActivityIndicator animating={true} color={"#000"}></ActivityIndicator>
       </View>
  )
}

export default Splash;
