import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, View , Text} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import RNPickerSelect from 'react-native-picker-select';
import { ZenContext } from '../context/zenMindContext';
import Arrow from '../SVG/Arrow';
const SoundTest = () => {
    const isFocused = useIsFocused()
    const SoundMeditation = require('react-native-sound');
    SoundMeditation.setCategory('Playback');
    let meditation = new SoundMeditation('meditationsound.mp3', SoundMeditation.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + meditation.getDuration() + 'number of channels: ' + meditation.getNumberOfChannels());
        // Play the sound with an onEnd callback
        meditation.play((success) => {
            if (success) {
            console.log('successfully finished playing');
            } else {
            console.log('playback failed due to audio decoding errors');
            }
          });
        });
    useEffect(()=>{        
        meditation.stop(() => {
        // Note: If you want to play a sound after stopping and rewinding it,
        // it is important to call play() in a callback.
        meditation.play();
        });
        // Release the audio player resource
        return ()=> {
            meditation.stop()
            meditation.reset()
            console.log("soundTest off !")
        }
    },[isFocused])

    return (  
        <View>
            
        </View>
    );
};
const styles = StyleSheet.create({
    Dropdown:{
        height:"20%",
        width:'80%',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        color:'black',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'space-around',
        marginTop:"50%",
        borderRadius:7
    }, 
    background:{
        width:"80%",
        backgroundColor:'black', 
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    line:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        height:'10%',
        marginTop:15,  
        backgroundColor:'white', 
        width:'100%',
        borderRadius:15,    
    },

})
const pickerSelectStyles = StyleSheet.create({
    style0:{
        fontWeight:'bold'
    },
    style1:{
        fontWeight:'bold'
    },
    style2:{
        fontWeight:'bold'
    },
    style3:{
        fontWeight:'bold'
    }
  });
  export default SoundTest;