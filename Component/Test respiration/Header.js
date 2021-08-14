import React, { useContext, useState } from 'react';
import {Pressable, StyleSheet, Text,View} from 'react-native';
import ProgressBar from './progressBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InfoModal from '../Modal/infoModal';
export default function Head({boolTest,progress}){
    const [infoModalVisibility,updateInfoModalVisibility] = useState(false)
    return(
        <>
            <View>
                <Pressable onPress={()=>updateInfoModalVisibility(true)}>
                    {boolTest===false && <Ionicons name="ios-information-circle" style={{fontSize:40, color:'#3A8DAA', marginTop:20,marginLeft:"80%"}}/>}
                </Pressable>
                <Text style={styles.title}>Testez votre respiration</Text>
                <Text style={styles.subtitle}>Respirez normalement pendant 1 minute</Text>
                {boolTest===true&&<ProgressBar progress={progress}/>}
            </View>
           <InfoModal visibility={infoModalVisibility} onPress={()=>updateInfoModalVisibility(false)}/>
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        marginTop:50,
        textAlign:'center'
    },
    subtitle:{
        fontSize:16,
        textAlign:'center'
    }
    
})