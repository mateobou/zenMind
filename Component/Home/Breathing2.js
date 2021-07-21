import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import sunsetBackground from './../../images/bg3.png'
import { ZenContext } from '../context/zenMindContext';
import Lot from './Lottie';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import FeedbackPanel from '../Modal/FeedbackPannel';
import Energie from "./../../images/energiser.jpg";
import Endurance from "./../../images/endurance.jpg";
import Stress from './../../images/Stress.jpg'
import SoundTest from '../soundTest/soundTest';
const { width } = Dimensions.get('window');
const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};
    const ITEM_SIZE = width * 0.38;
      export default function Breathing({navigation,route}) {
        let title;
        route.params != undefined ? title= route.params.title: title=undefined 
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
        const Sound = require('react-native-sound');
        Sound.setCategory('Playback')
        const soundGong = (value)=>{
        const sound = new Sound('gong.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
        // Play the sound with an onEnd callback
        if(value==="play") sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        if(value==="stop") sound.stop();
        });
      });
      return sound;
    }
    const SoundMeditation = require('react-native-sound');
    SoundMeditation.setCategory('Playback');
    let meditation = new SoundMeditation('meditationsound.mp3', SoundMeditation.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + meditation.getDuration() + 'number of channels: ' + meditation.getNumberOfChannels());
        // Play the sound with an onEnd callback
        meditation.play((success) => {
            if (success) {
            console.log('successfully finished playing');
            } else {
            console.log('playback failed due to audio decoding errors');
            }
          });
        });

    function cleanData(){
      updateInspirationIsActive(false)
      updateExpirationIsActive(false)
      updateApnéeIsActive(false)
      clearInterval(interval)
      launchBreath()
      soundGong('stop')
    }
    let {inspiration, expiration, launchBreath,etat,updateInspiration,updateExpiration, typeDeRespiration,updateEtat,nombreRound, apnée, updateApnée,inspirationSauvegarde,expirationSauvegarde,apnéeSauvegarde, messages, numberOfRound,updateNumberOfRound
    } = React.useContext(ZenContext);

    let [msg, updateMsg] = React.useState(messages[getRandomInt(messages.length)]);
    let [interval, updateInterval] = React.useState();
    let [firstApnée, updateFirstApnée] = React.useState(true);
    let [apnéeIsActive,updateApnéeIsActive]=React.useState(false)
    let [inspirationIsActive,updateInspirationIsActive]=React.useState(false)
    let [expirationIsActive,updateExpirationIsActive]=React.useState(false)
    let [tempsRestant,updateTempsRestant]=React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false);
    
    
    React.useEffect(()=>{ 
        //updateInspirationIsActive(true)
        meditation.stop(()=>
          meditation.play())
        return ()=>{
          meditation.stop()
          cleanData()
        }
    }, [])
    React.useEffect(()=>{
      if(inspirationIsActive || expirationIsActive || apnéeIsActive)
      {
        soundGong('play')
      }
    },[inspirationIsActive,expirationIsActive,apnéeIsActive])
    function Inspiration()
    {
      clearInterval(interval)
        if (inspirationIsActive) {
          updateInterval(setInterval(() => {
            if (inspiration>0){
              updateEtat("Inspirez jusqu'à "+ inspirationSauvegarde)
              updateTempsRestant(inspirationSauvegarde - inspiration+1)
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
            updateEtat("Bloquez jusqu'à "+ apnéeSauvegarde)
            updateTempsRestant(apnéeSauvegarde - apnée)
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
            updateEtat("Expirez jusqu'à "+ expirationSauvegarde)
            updateTempsRestant(expirationSauvegarde - expiration)
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
        clearInterval(interval)
        if(inspiration<=0 && inspirationIsActive)
        {
            updateInspirationIsActive(false);
            updateInspiration(inspirationSauvegarde)
            if(typeDeRespiration === 1 ||typeDeRespiration === 3)updateApnéeIsActive(true)
            else updateExpirationIsActive(true) && Expiration();
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
        <ImageBackground source={title==="Respirer pour …\ngagner en énergie"? Energie : title==="Respirer pour …\nrécupérer"? Endurance : title==="Respirer pour …\ngérer son stress"? Stress:title==='Personnaliser vos séances' ?title===undefined || title===null :sunsetBackground} style={{width:"100%", height:"100%"}}>
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
                    
            
            {numberOfRound > nombreRound/2 && <Text style={styles.message}>{msg}</Text>}
            <Text style={styles.text}>{etat}</Text>
            <Text style={styles.time}>{tempsRestant}</Text>
            <Lot/>
            <SoundTest/>
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
    marginTop:20,
    
    width:"100%",
    textAlign:"center",
    color:'black'
  },
  time:{
    fontSize: ITEM_SIZE * 0.15,
    fontFamily: 'Menlo',
    color: colors.text,
    fontWeight: '900',
    marginTop:20,
    marginBottom:20,
    width:"100%",
    textAlign:"center",
    color:'black'
  },
  message:{
    fontSize: ITEM_SIZE * 0.1,
    fontFamily: 'Menlo',
    color: "black",
    fontWeight: '600',
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
