import React, {useContext, useState} from 'react';
import {StyleSheet, Text,View,Image} from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import lightning from './../../images/lightning.png'
import zen from './../../images/zen.png'
import sleep from './../../images/sleep.png'
import stress from './../../images/once.png'
import other from './../../images/door.png'
export default function Line({date,value,type, respi}){
    const {palettes} = useContext(ZenContext)
    const bigdate = new Date(date);
    const mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
    const date2 = bigdate.getDate()+' '+mois[bigdate.getMonth()];
    const date3 =  bigdate.getFullYear();
    return(
        <View style={type==="test" ? {...styles.line,borderBottomColor:palettes.paletteVerte.icons, borderBottomWidth:6} : styles.line}>
            <View>
                <Text style={{fontSize:18}}>{date2}</Text>
                <Text style={{fontSize:15, fontWeight:'bold'}}>{date3}</Text>
            </View>
            <Text>Respiration : {respi}</Text>
            {type==="test"? <Text style={{fontSize:14}}>Nombre de cycles : {value}</Text> : (value===1 ? <Image source={zen}/> : value===2 ? <Image source={sleep}/> : value===3 ? <Image source={lightning}/>: value===4 ? <Image source={stress}/>: <Image source={other}/>)}

        </View>
    );
}
const styles = StyleSheet.create({
    line:{
        width:'95%',
        backgroundColor:"#DCDCDC",
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
        flexDirection:"row",
        padding:10,
        borderRadius:10,
        backgroundColor:"white"
    },
    lineTest:{
        width:'95%',
        backgroundColor:"#DCDCDC",
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
        flexDirection:"row",
        padding:10,
        borderRadius:10,
        backgroundColor:"white",
    }
    
})