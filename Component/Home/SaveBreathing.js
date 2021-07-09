import React, { useContext } from 'react';
import LineSettings from './Line';
import Breath from './../../images/breath.png'
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Dropdown from '../test_setTimer/Picker';
import TimeChoice from './timeChoice';
import TimeChoice2 from './TimeChoice2';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ZenContext } from '../context/zenMindContext';
import { TextInput } from 'react-native-gesture-handler';
function SaveBreathing()
{   
    return(
        <View>
            <TextInput value="Hello world!"/>
        </View>
    )
}
export default SaveBreathing;
const styles = StyleSheet.create({
    Bouton:{
        backgroundColor:'#007AFF',
        width: "40%",
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        marginTop:60,
    },
    background:{
        width:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:'white',
    },
    view:{
        height:"90%",
        display:'flex',
        justifyContent:'center',  
        alignItems:'center'
    }
})