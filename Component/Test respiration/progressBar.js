import React, { useContext, useState, useEffect } from 'react';
import {Dimensions, StyleSheet, Text,View} from 'react-native';
import { ZenContext } from '../context/zenMindContext';
export default function ProgressBar({progress}){
    const { width,height} = Dimensions.get('window');
    const largeur = width/100*80
    const [progressWidth, setProgressWidth] = useState(0)
    const {palettes} = useContext(ZenContext)
    useEffect(()=>{
        setProgressWidth((largeur/60)*progress)
    },[progress])
    return(
        <View style={{width:largeur,marginRight:(width/100)*15,marginLeft:(width/100)*10}}>
            <View style={styles.bar}>
                <View style={{...styles.colored_bar,width:progressWidth, backgroundColor:palettes.paletteVerte.icons}}></View>
                <View style={{...styles.colored_bar_dark,width:largeur-progressWidth}}></View>
            </View>
            {progress!=1 || progress!=0? <Text style={{textAlign:'center',width:"100%", marginTop:10}}>Temps restant : {60-progress} secondes</Text>:<Text style={{textAlign:'center',width:"100%", marginTop:10}}>Temps restant : {60-progress}seconde</Text>}
        </View>
    );
}
const styles = StyleSheet.create({
    bar:{
        width:"100%",
        borderRadius:3,
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        marginTop:10,
        height:15
    },
    colored_bar:{
        height:15,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    colored_bar_dark:{
        backgroundColor:"white",
        height:15,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        
    }
})