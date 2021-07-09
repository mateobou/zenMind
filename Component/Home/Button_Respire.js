import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { Button, ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import Sun from './../../images/sun.png';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { ZenContext } from "../context/zenMindContext";
function ButtonRespire()
{
    const {MMKV} = useContext(ZenContext)
    const navigation = useNavigation();
    const [history, setHistory] = useMMKVStorage("history", MMKV);
    
    return(
        <Pressable 
            onPress={()=>{
                navigation.navigate('Personnalisée')
            }}
            style={styles.backgroundButton}
            title="Démarrer une respiration"
            color="#841584"
            accessibilityLabel="Learn more about this purple button">
                    <Text>Lancer une {"\n"} respiration</Text>
        </Pressable>
    );
}
export default ButtonRespire;
const styles = StyleSheet.create({
    backgroundButton:{
        width:250,
        height:250,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:25
    }
})