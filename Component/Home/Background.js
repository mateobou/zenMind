import React, { useContext } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Background from './../../images/home-fond.png'
import { ZenContext } from '../context/zenMindContext';
import HomePanel from '../Home_panel/HomePanel';
import { FlatList } from 'react-native-gesture-handler';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
function BackgroundD(){

    let {MMKV} = useContext(ZenContext);
    const [breathList, setBreathList] = useMMKVStorage("breathing", MMKV);
    breathList===undefined || breathList===null && setBreathList([{name:'Personnalisée'}])
    console.log(breathList)
    const rende = ({item})=>{
        return(
            <HomePanel text={item.name==="Personnalisée"?'Inspi/Expi/apneé personnalisable':"Inspiration : "+item.inspi+" /Expiration : "+item.expi+" /Apnée : "+item.apnée} button={item.name==="Personnalisée"?'Paramétrer la respiration':'Lancer la respiration'} destination="Respiration" type={item.type} inspi={item.inspi} expi={item.expi} round={item.round} apnée={item.apnée} destination={item.destination} title={item.name}/>
        )
    }
    return(
        <View>
            <ImageBackground source={Background} style={styles.home}>
                <FlatList data={breathList} renderItem={rende} horizontal style={{position:'absolute', bottom:20}} keyExtractor={(item,index)=>index.toString()} showsHorizontalScrollIndicator={false}/>
            </ImageBackground>
        </View>
    )
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