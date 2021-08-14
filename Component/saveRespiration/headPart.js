import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Modal , View, Text, Image , Button } from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import settings from './../../images/settings.png'
import Blob from './../../images/blob.png'
import SliderComponent from './../Respiration/Slider_feedback/Slider';
import { TextInput } from 'react-native-gesture-handler';
function HeadPart(){
    let [inputValue, setInputValue] = useState()
    return(
        <View style={styles.view}>
            <Text style={styles.title}>Sauvegarder ma session</Text>
            <Image source={Blob}/>
            <TextInput placeholder="Donnez un nom à votre respiration : " value={inputValue} onChange={(value)=>setInputValue(value)} placeholderTextColor='black' style={styles.input} style={styles.input}/>
        </View>
    )   
}
const styles = StyleSheet.create({
    input:{
        backgroundColor:'#FFE4DB',
        color:'black',
        width:"80%",
        borderRadius:4,
    },
    view:{
        backgroundColor:'#FFF',
        height:"40%",
        width:"99%",
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        borderRadius:15,
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
})
export default HeadPart