import React, { useContext, useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { ZenContext } from '../context/zenMindContext';
export default function Lot({stat}) {
      let [progress, updateProgress]= useState(new Animated.Value(0)); 
      let {typeDeRespiration,inspirationSauvegarde,expirationSauvegarde,apnéeSauvegarde}= useContext(ZenContext)
      function Inspiration(temps)
      {
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                progress,
                {
                  toValue: 1,
                  duration: (temps*1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              )
              
          ])).start()
      }
      function Expiration(temps)
      {
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                progress,
                {
                  toValue: 0,
                  duration: (temps*1000),
                  easing: Easing.linear(),
                  useNativeDriver: true
                }
              )
              
          ])).start()
      }
      
      
  useEffect(()=>{

      if(stat==='inspiration')
      {
        Inspiration(inspirationSauvegarde)
      }
      else if(stat==="expiration")
      {
        console.log('expiratipizzaon')
        Expiration(expirationSauvegarde)
      }
      else if(stat==='apnéeAprèsInspi')
      {
        typeDeRespiration===1 || typeDeRespiration===3 ? Inspiration(apnéeSauvegarde): Expiration(apnéeSauvegarde)
      }
      else{
        typeDeRespiration===2 ? Expiration(apnéeSauvegarde) : Inspiration(apnéeSauvegarde)
      }

    
  }, [stat])
    return (
      <LottieView source={require('./../../images/soleil.json')} progress={progress} style={styles.image} autoPlay={false}>
      </LottieView>
    );
  }
const styles = StyleSheet.create({
  image:{
    width:'40%',
    marginRight:'auto',
    marginLeft:'auto',
    opacity:0.9
  }
})
