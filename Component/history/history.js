import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text,Image } from 'react-native';
import { useMMKVStorage } from "react-native-mmkv-storage";
import { ZenContext } from '../context/zenMindContext';
import Line from './Line'
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native';
import Perso from "./../../images/Dame.jpg";
export default function History(){
    const {MMKV} = useContext(ZenContext)
    const [feedbackHistory, setFeedbackHistory] = useMMKVStorage("historique", MMKV);
    //const [testHistory, setTestHistory] = useMMKVStorage("Test", MMKV);
    const [bool, setBool] = useState(TestFeedback()===false ? true : false)
    function TestFeedback(){
        if(feedbackHistory === null || feedbackHistory.length ===0||feedbackHistory===undefined)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    useEffect(()=>{
        console.log("feedbackHistory");
        console.log( feedbackHistory)
        console.log( TestFeedback())
        console.log("feedbackHistory fin");
        
        if(feedbackHistory===undefined || feedbackHistory === null){
            setFeedbackHistory([])
        }
    })
    return(
        <ScrollView contentContainerStyle={{...styles.history}} style={{height:'100%'}} >
            <Text style={styles.title}>Historique</Text>
            {TestFeedback() === true && <Image source={Perso} style={{width:"90%",height:300}}/>}
            {TestFeedback() === true && feedbackHistory.map((history,index)=><Line date={history.date} value={history.value} type={history.type} index={index}/>)}
            {TestFeedback() === false ? <LottieView source={require('./../../images/empty.json')} style={{width:"100%", marginTop:10}} autoPlay loop/> : console.log('error')}
            {TestFeedback() === false && <Text>Il semblerait que votre historique est vide :/</Text>}
        </ScrollView>   
    );
}
const styles = StyleSheet.create({
    history:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
    }, 
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginVertical:30,
        textAlign:'center'
    }
})
/*
import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Text,Image,View} from 'react-native';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { ZenContext } from '../context/zenMindContext';
import Line from './Line'
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native';
import Perso from "./../../images/Dame.jpg"
export default function History(){
    const {MMKV} = useContext(ZenContext)
    const [feedbackHistory, setFeedbackHistory] = useMMKVStorage("historique", MMKV);
    //const [testHistory, setTestHistory] = useMMKVStorage("Test", MMKV);
    const [bool, setBool] = useState(TestFeedback()===false ? true : false)
    function TestFeedback(){
        if(feedbackHistory === null || feedbackHistory.length ===0||feedbackHistory===undefined)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    
    useEffect(()=>{
        console.log("feedbackHistory");
        console.log( feedbackHistory)
        console.log( TestFeedback())
        console.log("feedbackHistory fin");
        
        if(feedbackHistory===undefined || feedbackHistory === null){
            setFeedbackHistory([])
        }
    })
    return(
        <View>
                
                <FlatList data={feedbackHistory} renderItem={({item, index}) =>
                    index===1 ?<Image source={Perso} style={{width:"90%",height:"60%"}}/>&& <Line date={item.date} value={item.value} type={item.type} index={index}/>:<Line date={item.date} value={item.value} type={item.type} index={index}/>
                    }/>
            </View>
            <ScrollView contentContainerStyle={{...styles.history, height:"100%"}} style={{height:'100%'}}>
                <Text style={styles.title}>Historique</Text>
                <Image source={Perso} style={{width:"90%",height:"60%"}}/>
                {TestFeedback() === true && feedbackHistory.map((history,index)=><Line date={history.date} value={history.value} type={history.type} index={index}/>)}
                {TestFeedback() === true && feedbackHistory.map((history,index)=><Line date={history.date} value={history.value} type={history.type} index={index}/>)}
                {TestFeedback() === true && feedbackHistory.map((history,index)=><Line date={history.date} value={history.value} type={history.type} index={index}/>)}
                {TestFeedback() === true && feedbackHistory.map((history,index)=><Line date={history.date} value={history.value} type={history.type} index={index}/>)}
                {TestFeedback() === false ? <LottieView source={require('./../../images/empty.json')} style={{width:"100%", marginTop:10}} autoPlay loop/> : console.log('error')}
                {TestFeedback() === false&& <Text>Il semblerait que votre historique est vide :/</Text>}
            </ScrollView>

    );
}
const styles = StyleSheet.create({
    history:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
    }, 
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginVertical:30,
        textAlign:'center'
    }
}) */