import React from "react";
import {  View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const HeaderWithTitle = ({
    title, 
    onPress,
    backgroundColor,
})=>{
    return(
        <View style={{...styles.container, backgroundColor:backgroundColor}}>
            <View style={{flexDirection:'row', marginLeft:10}}>
                <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <Image style={styles.iconStyle} source={require("../Images/hambuger.png")}></Image>
                </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{width:"100%", height:60,  flexDirection:'row', alignItems:"center"},
    title: {
        color: "#000",
        fontSize:20,
        marginLeft:5,
        alignSelf:'center',
      },
      iconStyle:{height:36, width:36, resizeMode:"contain", tintColor:"#000"}
})

export default HeaderWithTitle;