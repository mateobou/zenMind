import React,{useContext, useEffect, useState} from 'react';

import {
  StatusBar,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import sunsetBackground from './../../images/sunset.png'
import { ZenContext } from '../context/zenMindContext';
import Lot from './Lottie';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import FeedbackPanel from '../Modal/FeedbackPannel';
const { width, height } = Dimensions.get('window');
const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};
const ITEM_SIZE = width * 0.38;
export default function Breathing() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      function cleanData(){
        updateInspirationIsActive(false)
        updateExpirationIsActive(false)
        updateApnéeIsActive(false)
        clearInterval(interval)
        launchBreath()
      }
      let {inspiration,updateBreathStart, expiration, launchBreath,etat,inspirationIsActive,expirationIsActive,updateInspiration,updateInspirationIsActive,updateExpirationIsActive,updateExpiration, typeDeRespiration,updateEtat,nombreRound, apnée, updateApnée,inspirationSauvegarde,expirationSauvegarde,apnéeSauvegarde, messages, numberOfRound,updateNumberOfRound
      } =useContext(ZenContext);
    let [msg, updateMsg] = useState(messages[getRandomInt(messages.length)]);
    let [interval, updateInterval] = useState();
    let [apnéeIsActive,updateApnéeIsActive]=useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const respirationBinaire = ["Inspiration", "Expiration"]
    const respirationTriangle = ["Inspiration", "Apnée","Expiration"]
    const respirationTriangleInversé = ["Inspiration","Expiration", "Apnée"]
    const respirationCarré = ["Inspiration", "Apnée","Expiration", "Apnée"]
    const [respiration, setRespiration] = useState(typeDeRespiration===0 ? respirationBinaire : typeDeRespiration===1 ? respirationTriangle : typeDeRespiration===2 ? respirationTriangleInversé : typeDeRespiration===3 ? respirationCarré : respirationBinaire)
    let [ind, updateind] = useState(0)
    useEffect(()=>{
      if(respiration[ind]==="Inspiration")
        {
          updateInterval(setInterval((() => {
            if(inspiration>0)
            {
              updateEtat("Inspirez... "+ inspiration)
              updateInspiration(inspiration-1)
            }
            else{
              clearInterval(interval)
            }
          }, 1000)));  
          ind<respiration.length && updateind(ind+1)
        }
        else if(respiration[ind]==="Expiration")
        { 
          updateInterval(setInterval((() => {
            if(expiration>0)
            {
              updateEtat("Expirez... "+ expiration)
              updateExpiration(expiration-1)
            }
            else{
              clearInterval(interval)
            }
          }, 1000)));
          ind<respiration.length && updateind(ind+1)
        }
      else if(respiration[ind]==="Apnée")
      {
        if(apnée>0)
        {
          setTimeout(() => {
            updateEtat("Inspirez... "+ apnée)
            updateApnée(apnée--); 
          }, 1000);
        }
        else{
          clearInterval(interval)
        }
        ind<respiration.length && updateind(ind+1)
        
        
      } 
      return function(){
        clearInterval(interval)
      }
    },[])
      return (
    <>
    <View style={styles.container}>
        
        <ImageBackground source={sunsetBackground} style={{width:"100%", height:"100%"}}>
            <StatusBar hidden />
                <Animated.View
                    style={[
                    StyleSheet.absoluteFillObject,
                    {
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingBottom: 100,
                    },
                    ]}>
                </Animated.View>
            
            <Lot/>
            <Text style={styles.text}>{etat}</Text>
            <Text style={styles.message}>{numberOfRound > nombreRound/2 && msg}</Text>
            
        </ImageBackground>
    </View>
    {modalVisible===true &&<FeedbackPanel modal={true}/>}
  </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.black,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: ITEM_SIZE * 0.2,
    fontFamily: 'Menlo',
    color: colors.text,
    fontWeight: '900',
    position:"absolute",
    bottom:100,
    width:"100%",
    textAlign:"center"
  },
  message:{
    fontSize: ITEM_SIZE * 0.1,
    fontFamily: 'Menlo',
    color: colors.text,
    fontWeight: '600',
    position:"absolute",
    bottom:50,
    width:"100%",
    textAlign:"center" 
  },
  text_back:{
    fontSize: ITEM_SIZE * 0.4,
    fontFamily: 'Menlo',
    color: colors.text,
    fontWeight: '900',
    width:"100%",
    textAlign:'center',
    marginBottom: 20,
    position:"relative",
    top:-500
  }
});
