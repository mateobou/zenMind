import React, { useContext, useState, useEffect } from 'react';
import LineSettings from './Line';
import LottieView from 'lottie-react-native';
import { Button, StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import settings from './../../images/settings.png'
import DraggableView from './../Respiration/Slider_feedback/DraggableView'
import TimeChoice from './timeChoice';
import TimeChoice2 from './TimeChoice2';
import SaveBreathing from './SaveBreathing';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ZenContext } from '../context/zenMindContext';
import Breathing  from './../../images/breathing.svg';
import Expiration  from './../../images/sneeze.svg';
import Loading  from './../../images/loading.svg';
import Dropdown from '../test_setTimer/Picker';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import NameModal from '../Modal/NameModal';

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
    let [nameModal, setNameModal ] = useState(false)
    let [progress, updateProgress]= useState(new Animated.Value(0)); 
    let {typeDeRespiration,apnéeSauvegarde, inspirationSauvegarde, numberOfRound,expirationSauvegarde,updateTypeDeRespiration,launchBreath} = useContext(ZenContext);
    const navigation = useNavigation();
    useEffect(()=>{
        updateTypeDeRespiration(0)
    },[])
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
                <Image source={styles.image} source={settings}/>
                <Dropdown/>
                <LineSettings image={Breathing} text="inspiration"/>
                <LineSettings image={Expiration} text="expiration"/>
                {typeDeRespiration!=0 && <LineSettings image={Expiration} text="apnée"/>}
                <LineSettings image={Loading} text="rounds" unité="rounds"/>
                <View style={styles.background}>
                    <Pressable title="Lancer la respiration" onPress={()=>{
                        launchBreath()
                        navigation.navigate('Breath');
                        setNameModal(true)
                    }}style={styles.Bouton}><Text style={styles.text} style={{color:"#785852"}}>Lancer la respiration</Text></Pressable>
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

                        }><Text>Sauvegarder la respiration</Text><LottieView source={require('./../../images/validation.json')} progress={progress} ref={anim => {setAnim(anim)}} style={{width:50}} loop={false}/></Pressable>
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
        zIndex:1
        
    },
    background:{
        width:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:'white',
    },
    image:{
        marginTop:50,
        width:280,
        marginBottom:0
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
        flexDirection:'row'
    }
})