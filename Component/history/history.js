import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { ZenContext } from '../context/zenMindContext';
import Line from './Line'
import LottieView from 'lottie-react-native';
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
        <View style={styles.history}>
            <Text style={styles.title}>Historique</Text>
            
            {TestFeedback() ===true && feedbackHistory.map((history)=><Line date={history.date} value={history.value} type={history.type}/>)}
            {TestFeedback()===false? <LottieView source={require('./../../images/empty.json')} style={{width:"100%", marginTop:10}} autoPlay loop/> : console.log('error')}
            {TestFeedback()===false&& <Text>Il semblerait que votre historique est vide :/</Text>}
            
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
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:30
    }
})