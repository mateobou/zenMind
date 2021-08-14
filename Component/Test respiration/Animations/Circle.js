import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function Circle({numberCycle}) {
    const [anim, setAnim] = useState()
    useEffect(()=>{
        anim!=undefined && anim.play(0,100)
    },[numberCycle])
    return (
        
            <LottieView
                ref={animation => {setAnim(animation)}}
                source={require('./../../../images/circle.json')}
                style={styles.Circle} loop={false}/>
    );
  }

const styles = StyleSheet.create({
    view:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    Circle:{
        width:"100%"
    }
})