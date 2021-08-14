import React, { useContext, useState, useEffect } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Background from './../../images/bg2.png'
import { ZenContext } from '../context/zenMindContext';
import HomePanel from '../Home_panel/HomePanel';
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import Lancement from '../Lancement/Lancement';
function BackgroundD(){
    let {breathList, setBreathList} = useContext(ZenContext);
    breathList===undefined || breathList===null && setBreathList([{name:'Personnalisée'}])
    const [list,setList] = useState(breathList);
    const isFocused = useIsFocused()
    const [firstLaunch, updateFirstLaunch] = useState(true)
    

    useEffect(()=>{
        setList(breathList)
        console.log(breathList)
    },[isFocused])
    useEffect(()=>{
        setTimeout(()=>{
            updateFirstLaunch(false)
        },3000)
    },[])
    const rende = ({item})=>{
        return(
            <HomePanel text={item.name==="Prenez l'air"?"Définir vos temps d’inspiration, d’expiration \net d’apnée":"Inspiration : "+item.inspi+" /Expiration : "+item.expi+" /Apnée : "+item.apnée} button={item.name==="Personnalisée"?'Libérer son souffle \n Bien respirer c’est bien vivre !':'Prenez le temps de souffler !'} destination={item.destination} type={item.type} inspi={item.inspi} expi={item.expi} round={item.round} apnée={item.apnée} title={item.name} data={item}/>
        )
    }
    if(firstLaunch===true)
    {
        return(<Lancement/>)
    }
    else{
        return(
            <View>
                <ImageBackground source={Background} style={styles.home}>
                    {isFocused===true ?<FlatList data={list} renderItem={rende} horizontal style={{position:'absolute', bottom:20}} keyExtractor={(item,index)=>index.toString()} showsHorizontalScrollIndicator={false}/>:console.log('no error')}
                </ImageBackground>
            </View>
        )
    } 
}
export default BackgroundD;
const styles = StyleSheet.create({
    home:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    }
})