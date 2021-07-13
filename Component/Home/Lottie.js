import React, { useContext, useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { ZenContext } from '../context/zenMindContext';
export default function Lot() {
      let [progress, updateProgress]= useState(new Animated.Value(0)); 
      let {inspirationSauvegarde,breathStart, expirationSauvegarde, etat, expirationIsActive, apnéeIsActive, typeDeRespiration,apnéeSauvegarde,numberOfRound,nombreRound, inspirationIsActive} = useContext(ZenContext);
  useEffect(()=>{
    setTimeout(() => {
      if(typeDeRespiration===1)
      {
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                progress,
                {
                  toValue: 1,
                  duration: (inspirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 1,
                  duration: (apnéeSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 0,
                  duration: (expirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              
          ])).start()
      }
      else if(typeDeRespiration===2)
      {
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                progress,
                {
                  toValue: 1,
                  duration: (inspirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 0,
                  duration: (apnéeSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 0,
                  duration: (expirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              
          ])).start()
      }
      else if(typeDeRespiration===3)
      {
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                progress,
                {
                  toValue: 1,
                  duration: (inspirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 1,
                  duration: (apnéeSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 0,
                  duration: (expirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              Animated.timing(
                progress,
                {
                  toValue: 0,
                  duration: (inspirationSauvegarde*1000+1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              ),
              
          ])).start()
      }
      else{
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                  progress,
                  {
                    toValue: 1,
                    duration: (inspirationSauvegarde*1000+1000),
                    easing: Easing.linear(),
                    useNativeDriver: true
                  }
                ),
                Animated.timing(
                  progress,
                  {
                    toValue: 0,
                    duration: (expirationSauvegarde*1000+1000),
                    easing: Easing.linear(),
                    useNativeDriver: true
                  }
                )
          ])).start()
      }
    }, (1500));
    
  }, [])
    return (
      <LottieView source={require('./../../images/soleil.json')} progress={progress} style={styles.image} autoPlay={false}>
      </LottieView>
    );
  }
const styles = StyleSheet.create({
  image:{
    width:'60%',
    marginRight:'auto',
    marginLeft:'auto',
    opacity:0.9
  }
})
