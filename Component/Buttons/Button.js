import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { Button, ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import Sun from './../../images/sun.png';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { ZenContext } from "../context/zenMindContext";
function ButtonLight({destination,text,onPress})
{   
    const navigation = useNavigation()
    return(
        <Pressable 
            onPress={onPress}
            style={styles.backgroundButton}>
                    <Text style={{color:"white"}}>{text}</Text>
        </Pressable>
    );
}
export default ButtonLight;
const styles = StyleSheet.create({
    backgroundButton:{
        width:154,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:25,
        backgroundColor:'#FFBDAF',
        borderRadius:5
    }
})