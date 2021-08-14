import React, { useContext, useState , useEffect } from 'react';
import {StyleSheet, Text,View,Pressable, Modal, Image} from 'react-native';
import Head from './Header'
import Moine from "./../../images/Moine.png"
import { ZenContext } from '../context/zenMindContext';

import TestModal from '../Modal/TestModal';
import Circle from './Animations/Circle';
import Yoga from './Animations/Yoga';
import { useMMKVStorage } from 'react-native-mmkv-storage';
export default function Test(){
    const [boolTest, setBoolTest]= useState(false)
    const [timer, updateTimer] = useState(0)
    const [progress, updateProgress]= useState(60-timer)
    const [Interval, updateInterval] = useState();
    let {numberCycle, setNumberCycle, palettes} = useContext(ZenContext)
   
    const [modalVisible,setModalVisible] = useState(false);
    useEffect(() => {
        if(boolTest===true && timer <60)
        {
            updateInterval(setInterval(() => {
                updateTimer(timer+1);
                console.log(timer)
                updateProgress(timer)
            }, 1000));
            return ()=>clearInterval(Interval)
        }
        else if (timer >= 60){
            setBoolTest(false)
            clearInterval(Interval)
            updateTimer(0)
            updateProgress(0)
            setBoolTest(false)
            setModalVisible(true)
        }
    },[timer,boolTest])
    useEffect(()=>{
        return ()=>{
            clearInterval(Interval)
            updateTimer(0)
            updateProgress(0)
            setModalVisible(false)
            setBoolTest(false)
            updateProgress(0)
         }
    },[])
    return(
        <View>
            <View style={styles.history}>
                <Head boolTest={boolTest} progress={progress}/>
                {boolTest===true && <Text style={{textAlign:'center', marginTop:10}}>Pour compter vos respirations, {"\n"}touchez l’écran lors de chaque inspiration</Text>}
                <Text>Nombre de cycles : {numberCycle}</Text>
                <Pressable style={{height:350,width:"100%",zIndex:2}} onPress={()=>{
                    boolTest===true && setNumberCycle(numberCycle+1)
                }}>
                    <Circle style={styles.yoga} numberCycle={numberCycle}/>
                    <Yoga boolTest={boolTest}/>
                </Pressable> 
                {boolTest===false && <Pressable style={{...styles.pressable,backgroundColor:palettes.paletteVerte.button}} onPress={()=>{
                    setBoolTest(true);
                    setModalVisible(false)
                    }}><Text style={{...styles.text_button, color:palettes.paletteVerte.text}}>Lancer</Text></Pressable>}
            </View>
            <TestModal numberCyc={numberCycle} Moine={Moine} modalVisible={modalVisible}/>
        </View>
    );
}
const styles = StyleSheet.create({
    history:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    text_button:{
        fontSize:14,
        textAlign:'center',
        fontWeight:'bold'
    },
    pressable:{
        backgroundColor:'#FFBDAF',
        width:165,
        height:40,
        borderRadius:7,
        display:'flex',
        justifyContent:'center', 
        marginTop:"10%",
        zIndex:1
    }, 
})