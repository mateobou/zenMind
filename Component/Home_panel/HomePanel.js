import React,{ useContext, useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { ZenContext } from "../context/zenMindContext";
function HomePanel({destination="Respiration",text,button, data})
{
    let {updateInspirationSauvegarde, updateExpirationSauvegarde,updateApnéeSauvegarde,updatenombreRound,updateTypeDeRespiration,updateInspiration,updateExpiration,updateApnée,palettes} = React.useContext(ZenContext)
    const navigation = useNavigation();
    return(
        <View style={styles.bigView}>
            <View style={styles.background}>
            </View>
            <View style={styles.view}>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.subtitle}>{text}</Text>
                </View>
                <Pressable onPress={()=>{
                    if(data.name!="Prenez l'air"){
                        if(data.type===0)
                        {
                            console.log('rounds')
                            console.log(data.round)
                            updateInspirationSauvegarde(data.inspi)
                            updateExpirationSauvegarde(data.expi)
                            updatenombreRound(data.round)
                            updateTypeDeRespiration(data.type)
                            updateInspiration(data.inspi)
                            updateExpiration(data.expi)
                            navigation.navigate(destination,{title:'Personnalisée'});
                        }
                        else if (data.type===1 || data.type===2 || data.type===3)
                        {
                            updateInspirationSauvegarde(data.inspi)
                            updateExpirationSauvegarde(data.expi)
                            updatenombreRound(data.round)
                            updateApnéeSauvegarde(data.apnée)
                            updateInspiration(data.inspi)
                            updateExpiration(data.expi)
                            updateApnée(data.apnée)
                            updateTypeDeRespiration(data.type)
                            navigation.navigate(destination,{title:'Personnalisée'});
                        }
                        else{
                            updatenombreRound(data.round)
                            navigation.navigate({destination},{title:'Personnalisée'});
                        }
                    }
                    else{
                        navigation.navigate('Respiration')
                    }
                    
                    }} style={{...styles.pressable,backgroundColor:palettes.paletteVerte.button}}>
                    <Text style={styles.button}>{button}</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default HomePanel;
const styles=StyleSheet.create({
    view:{
        width:350,
        height:154,
        display:'flex',
        justifyContent:"space-around",
        alignItems:'center',
        position:'absolute',
        bottom:10,
    },
    subtitle:{
        fontSize:14,
        color:'white',
        textAlign:'center',
        marginTop:6
    },
    background:{
        backgroundColor:'#BDBDBD',
        width:350,
        height:154,
        opacity:0.3,
        borderRadius:10,
        position:'relative',
        left:10
    },
    pressable:{
        width:"80%",
        height:40,
        borderRadius:7,
        display:'flex',
        justifyContent:'center'
    }, 
    button:{
        color:'#211E1D',
        textAlign:'center',
        fontWeight:"bold"
    },
    title:{
        fontSize:17,
        color:"white",
        fontWeight:'bold',
        textAlign:'center'
    },
    bigView:{
        width:350,
        height:154,
        marginRight:15,
    }
})