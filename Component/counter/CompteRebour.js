import { multiply } from 'lodash';
import React, { useContext, useEffect } from 'react';
import { Animated, Dimensions,View,Text } from 'react-native';
import WaitingImage from './../../images/waitingImage.png'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation } from '@react-navigation/native';
import { ZenContext } from '../context/zenMindContext';
import { BackgroundImage } from 'react-native-elements/dist/config';
function CompteRebour({route}){
    const navigation = useNavigation()
    let {updateBreathStart} = useContext(ZenContext)
    let remainingTime;
    useEffect(()=>{
        if(remainingTime===0){
            updateBreathStart(true)
            navigation.navigate('Breath',{title:route.params})

        }
        else{
            console.log(remainingTime)
        }
    }, [remainingTime])
    return(
        <BackgroundImage source={WaitingImage} style={{width:"100%", height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <CountdownCircleTimer
                isPlaying
                duration={10}
                style={
                    {
                        width:'70%',
                        height:'70%'
                    }
                }
                colors={[
                ['#51A3A1']
                ]}
                onComplete={()=>{
                    updateBreathStart(true)
                    console.log(route.params)
                    navigation.navigate('Breathing',{title:route.params.title})  
                }}
            >
            </CountdownCircleTimer>
            <Text style={{color:'white', fontSize:14, textAlign:'center', fontWeight:'bold', marginTop:30}}>Installez-vous confortablement,{"\n"}la séance va commencer...</Text>
        </BackgroundImage>
    )
}
export default CompteRebour;