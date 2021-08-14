import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet } from 'react-native';
export default function Yoga({boolTest}) {
    const [play,setPlay] = useState(boolTest)
    const [anim, setAnim] = useState()
    useEffect(()=>{
        anim != undefined && boolTest===true && anim.play()
    },[boolTest])
    return (
            <LottieView
                ref={animation => {setAnim(animation)}}
                source={require('./../../../images/yoga.json')}
                style={styles.yoga}
                autoPlay={boolTest}
                loop={boolTest}
                />
                
            );
  }

const styles = StyleSheet.create({
    view:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    yoga:{
        position:'relative',
        bottom:200,
        width:"100%"
    }
})