// Inspiration: https://dribbble.com/shots/2343572-Countdown-timer
// 👉 Output of the code: https://twitter.com/mironcatalin/status/1321856493382238208

import { transform } from '@babel/core';
import * as React from 'react';
import {
  Vibration,
  StatusBar,
  Easing,
  TextInput,
  Dimensions,
  Animated,
  TouchableOpacity,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { ZenContext } from '../context/zenMindContext';

const { width, height } = Dimensions.get('window');
const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};
const timers = [...Array(59).keys()].map((i) => (i === 0 ? 1 : i +1));
const ITEM_SIZE = height/10* 0.34;
const ITEM_SPACING = (height/6.5 - ITEM_SIZE)/2.5;
export default function TimeChoice3({text, unité}) {
    const [minutes, updateMinutes] = React.useState();
    const scrollX = React.useRef(new Animated.Value(0)).current
    const [duration, setDuration] = React.useState(timers[0])
    let {updateInspirationSauvegarde, updateExpirationSauvegarde,updateApnéeSauvegarde,updatenombreRound} = React.useContext(ZenContext)
    //text==='round' ? updateUnit('rounds') : updateUnit(unité);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            position:'relative',
            bottom:100
          },
        ]}>
      </Animated.View>
      
      <View style={styles.container2}>
          <Text style={styles.text_back}>{unité}</Text>
          <Animated.FlatList
          data={timers}
          keyExtractor={item => item.toString()}
          horizontal={false}
          bounces={false}
          onScroll={Animated.event(
              [{nativeEvent: {contentOffset:{y:scrollX}}}],
              {useNativeDriver: true}
          )}
          onMomentumScrollEnd={ev=>{
            const index = Math.round(ev.nativeEvent.contentOffset.y/ITEM_SIZE)
            setDuration(timers[index]);
            if(unité==='minutes')
            {
              switch(text){
                case 'inspiration':
                  updateInspirationSauvegarde(timers[index]*60);
                  break;
                case 'expiration': 
                  updateExpirationSauvegarde(timers[index]*60);
                  break;
                case 'apnée': 
                  updateApnéeSauvegarde(timers[index]*60);
                  break;
                case 'rounds': 
                  updatenombreRound(timers[index]*60);
                  break;
              }
            }
            else{
              switch(text){
                case 'inspiration':
                  updateInspirationSauvegarde(timers[index]);
                  break;
                case 'expiration': 
                  updateExpirationSauvegarde(timers[index]);
                  break;
                case 'apnée': 
                  updateApnéeSauvegarde(timers[index]);
                  break;
                case 'rounds': 
                  updatenombreRound(timers[index]);
                  break;
              }
            }
            console.log(text)
            
          }}
          style={{flexGrow:0}}
          snapToInterval={ITEM_SIZE/2}
          decelerationRate='fast'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            //paddingHorizontal: ITEM_SPACING,
            paddingVertical: ITEM_SPACING
          }}
          renderItem={({item, index})=>{
              const inputRange = [
                  (index - 1)*ITEM_SIZE,
                  index*ITEM_SIZE,
                  (index+1)*ITEM_SIZE
              ]
              const opacity = scrollX.interpolate({
                  inputRange, 
                  outputRange: [.4,1,.4]
              })
              const scale = scrollX.interpolate({
                inputRange, 
                outputRange: [.7,1,.7]
            })
              return <View style={{height: ITEM_SIZE, display:'flex',justifyContent:'center', alignItems:'center' }}>
                  <Animated.Text style={[styles.text,{
                      opacity,
                      transform:[{scale}]
                      }]}>
                        {item}
                  </Animated.Text>
              </View>

          }}
        style={styles.text}
          />
        </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height:150,
    width: "50%",
    display:'flex',
    flexDirection:'column',
    backgroundColor: colors.text,
    justifyContent:'center',
    alignItems:'center',
    borderBottomEndRadius:15,
    borderBottomStartRadius:15,
  },
  text: {
    fontSize: ITEM_SIZE * 1,
    fontFamily: 'Menlo',
    color: colors.black,
    fontWeight: '900',
  },
  text_back:{
    fontSize: ITEM_SIZE *0.5,
    fontFamily: 'Menlo',
    color: colors.black,
    fontWeight: '900',
    textAlign:'center',
    marginBottom:10
  }, 
  container2:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
  }
});