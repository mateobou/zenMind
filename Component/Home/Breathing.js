// Inspiration: https://dribbble.com/shots/2343572-Countdown-timer
// 👉 Output of the code: https://twitter.com/mironcatalin/status/1321856493382238208

import * as React from 'react';
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
import Lottie from './Lottie';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import OptionBar from '../Respiration/OptionBar';
import FeedbackPanel from '../Modal/FeedbackPannel';
import BreathProgressBar from '../Respiration/ProgressBar';
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
        updateNumberOfRound(1)
        updateInspirationIsActive(false)
        updateExpirationIsActive(false)
        updateApnéeIsActive(false)
        clearInterval(interval)
        launchBreath()
      }
      let {inspiration,updateBreathStart, expiration, launchBreath,etat,updateInspiration,updateExpiration, typeDeRespiration,updateEtat,nombreRound, apnée, updateApnée,inspirationSauvegarde,expirationSauvegarde,apnéeSauvegarde, messages, numberOfRound,updateNumberOfRound
      } = React.useContext(ZenContext);
    let [msg, updateMsg] = React.useState(messages[getRandomInt(messages.length)]);
    let [interval, updateInterval] = React.useState();
    let [firstApnée, updateFirstApnée] = React.useState(true);
    let [apnéeIsActive,updateApnéeIsActive]=React.useState(false)
    let [inspirationIsActive,updateInspirationIsActive]=React.useState(false)
    let [expirationIsActive,updateExpirationIsActive]=React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false);
    React.useEffect(()=>{    
        //cleanData()
        updateBreathStart(true)
        updateInspirationIsActive(true)
        launchBreath()
        return ()=>cleanData()
    }, [])
    function Inspiration()
    {
      clearInterval(interval)
        if (inspirationIsActive) {
          updateInterval(setInterval(() => {
            if (inspiration>0){
              updateEtat("Inspirez... "+ inspiration)
              updateInspiration(inspiration--);
            }
            else
            {
              InspirationFin()
            }
          }, 1000));
        }
        else if(!inspirationIsActive){
            clearInterval(interval)
        }
    }
    function Apnée()
    {
      if (apnéeIsActive) {
        updateInterval(setInterval(() => {
          if (apnée>0){
            updateEtat("Bloquez... "+ apnée)
            updateApnée(apnée--);
          }
          else
          {
            updateApnéeIsActive(false)
            ApnéeFin()
          }
        }, 1000));   
      }  
    }
    function Expiration()
    {
        if (expirationIsActive) {
                updateInterval(setInterval(() => {
                  if (expiration>0){
                    updateExpiration(expiration--);
                    updateEtat("Expirez ... " + expiration)
                    console.log("ExpirationIsActive")
                    console.log(expirationIsActive) 
                  }
                  else{
                    updateExpirationIsActive(false)
                    ExpirationFin()
                  }
                    
                }, 1000));
            }
    }
    function InspirationFin()
    {
        if(inspiration<=0 && inspirationIsActive)
        {
            updateInspirationIsActive(false)    
            clearInterval(interval)
            updateInspiration(inspirationSauvegarde)
            
            typeDeRespiration === 1 ||typeDeRespiration === 3 ? updateApnéeIsActive(true):updateExpirationIsActive(true) && Expiration();
            console.log(apnéeIsActive)
            
        }  
    }
    function ApnéeFin()
    {
        if(apnée<=0)
        {
            updateApnée(apnéeSauvegarde)
            if(numberOfRound!== nombreRound && apnéeIsActive)
            {
                typeDeRespiration === 0 && updateExpirationIsActive(true);
                typeDeRespiration === 1 && updateExpirationIsActive(true) && Expiration();
                typeDeRespiration === 2 && updateInspirationIsActive(true) && Inspiration();
                if(typeDeRespiration === 3 && firstApnée) {
                    updateExpirationIsActive(true) && Expiration();
                    updateFirstApnée(!firstApnée)
                }
                else if (typeDeRespiration === 3 && !firstApnée && nombreRound !== numberOfRound)
                {
                    updateInspirationIsActive(true)
                    Inspiration();   
                    updateNumberOfRound(numberOfRound+1);
                    updateFirstApnée(!firstApnée)
                }
                else{
                  //setModalVisible(true)
                }
                //updateExpirationIsActive(true) && Expiration;
                updateApnéeIsActive(false)
                clearInterval(interval)       
            }
            console.log('clear');
            updateApnéeIsActive(false)    
            clearInterval(interval)
            updateApnée(apnéeSauvegarde)
        }
    }
    function ExpirationFin()
    {
        clearInterval(interval)
        if(expiration<=0 && expirationIsActive && numberOfRound<nombreRound)
        {
            
          updateExpirationIsActive(false);
          updateExpiration(expirationSauvegarde)
          updateNumberOfRound(numberOfRound+1);
          clearInterval(interval)
          typeDeRespiration===0 && updateInspirationIsActive(true);
          typeDeRespiration===1 && updateInspirationIsActive(true);
          typeDeRespiration===2 && updateApnéeIsActive(true);
          typeDeRespiration===3 && updateApnéeIsActive(true);
        }
        else{
          updateExpirationIsActive(false);
            console.log("Expiration fin 2")
            console.log(typeDeRespiration)            
            console.log('Expiration fin fin 2');            
            clearInterval(interval);
            cleanData()
            setModalVisible(true)
        }    
    }
    /* 
    Pseudo-code : 
    Comment connaître le type de respiration ?
        Si la respiration est binaire 
            Lancer respiration binaire
        Si la respiration est triangulaire : 
            Lancer la respiration triangulaire ->
    */
    //Lancement de la respiration en fonction du type de respiration  
    React.useEffect(()=>{
        if (typeDeRespiration===0)
        {
                Inspiration();
                Expiration();
            //Inspiration
        }
        else if (typeDeRespiration===1)
        {
                Inspiration();
                Apnée();
                Expiration();
            //Inspiration        
        }
        else if (typeDeRespiration===2)
        {
                Inspiration();
                Expiration();
                Apnée();
            //Inspiration        
        }
        else if (typeDeRespiration===3)
        {
            Inspiration();
            Apnée();
            Expiration();
        }
        
    },[inspirationIsActive, numberOfRound, expirationIsActive, apnéeIsActive]);           
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
