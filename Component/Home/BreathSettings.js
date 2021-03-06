import React, { useContext, useState, useEffect } from 'react';
import LineSettings from './Line';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import settings from './../../images/settings.png'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ZenContext } from '../context/zenMindContext';
import Breathing  from './../../images/breathing.svg';
import Expiration  from './../../images/sneeze.svg';
import Loading  from './../../images/loading.svg';
import Dropdown from '../test_setTimer/Picker';
import NameModal from '../Modal/NameModal';
import { ImageBackground } from 'react-native';
function BreathSettings()
{   
    let [arr,setArr] = useState({
        type:typeDeRespiration,
        inspi:inspirationSauvegarde,
        expi:expirationSauvegarde,
        apnée:apnéeSauvegarde,
        round:numberOfRound,
        type:typeDeRespiration,
        destination:'Breath'
    })
    let [anim, setAnim ] = useState()
    let [nameModal, setNameModal] = useState(false)
    let [progress, updateProgress]= useState(new Animated.Value(0)); 
    let {typeDeRespiration,apnéeSauvegarde, inspirationSauvegarde, numberOfRound,expirationSauvegarde,updateTypeDeRespiration,updateInspiration,palettes,updateExpiration,expiration,updateApnée,apnée} = useContext(ZenContext);
    const navigation = useNavigation();
    
    useEffect(()=>{
        if(anim!= undefined){
            setTimeout(() => {
                anim.play(0,75)
            }, 1000)
        }
    },[anim])
    return(
        <>
            <View style={styles.view}>
                <View style={{height:240, width:"100%"}}> 
                    <ImageBackground source={settings} style={styles.image} resizeMode="cover">

                    </ImageBackground>
                </View>
                <Dropdown modal={false}/>
                <LineSettings image={Breathing} text="Inspiration"/>
                {typeDeRespiration===1 ? <LineSettings image={Expiration} text="Expiration"/> : typeDeRespiration===2 ?<LineSettings image={Expiration} text="Apnée"/>: <LineSettings image={Expiration} text="Expiration"/> }
                {typeDeRespiration===1 ? <LineSettings image={Expiration} text="Apnée"/> :  typeDeRespiration===2 || typeDeRespiration===3 ?<LineSettings image={Expiration} text="Expiration"/> : null }
                <LineSettings image={Loading} text="Rounds" unité="rounds"/>
                <View style={styles.background}>
                    <Pressable title="Lancer la respiration" style={{fontWeight:'bold'}} onPress={()=>{
                        updateInspiration(inspirationSauvegarde)
                        updateExpiration(expirationSauvegarde)
                        updateApnée(apnéeSauvegarde)
                        updateTypeDeRespiration(typeDeRespiration)
                        console.log(inspirationSauvegarde)
                        navigation.navigate('Breath', {title:'Personnalisée'});
                        //setNameModal(true)
                    }}style={{...styles.Bouton,backgroundColor:palettes.paletteVerte.button}}><Text style={{...styles.text, color:palettes.paletteVerte.text}} >Lancer la respiration</Text></Pressable>
                    <Pressable style={styles.subtitleButton} onPress={()=>
                        {
                            anim.play(75,120)
                            setArr({type:typeDeRespiration,
                                inspi:inspirationSauvegarde,
                                expi:expirationSauvegarde,
                                apnée:apnéeSauvegarde,
                                round:numberOfRound,
                                type:typeDeRespiration,
                                destination:'Breath'})
                            setNameModal(true)
                        }

                        }><Text style={{fontSize:14,color:palettes.paletteVerte.text}}>Sauvegarder la respiration</Text><LottieView source={require('./../../images/validation.json')} progress={progress} ref={anim => {setAnim(anim)}} style={{width:50}} loop={false}/></Pressable>
                </View>
            </View>
            {nameModal===true && <NameModal modal={nameModal} arr={{...arr}}/>}
        </>
    )
}
export default BreathSettings;
const styles = StyleSheet.create({
    Bouton:{
        backgroundColor:'#FFB7A8',
        width: "40%",
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        marginTop:20,
        zIndex:1,
        fontWeight:'bold'
        
    },
    background:{
        width:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontWeight:'bold'
    },
    image:{
        height:240,
        width:"60%",
        marginLeft:'30%'
        
    },
    view:{
        height:"100%",
        display:'flex',
        justifyContent:'center',  
        alignItems:'center',
        backgroundColor:"#F9F9F9"
    },
    container:{
        marginTop:15,
        width:"100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }, 
    subtitleButton:{
        marginTop:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        fontWeight:'bold'
    }
})