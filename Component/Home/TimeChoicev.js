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
const ITEM_SIZE = 32;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;
export default function TimeChoice({text}) {
    
    const scrollX = React.useRef(new Animated.Value(0)).current
    const [duration, setDuration] = React.useState(timers[0]);
    let {updateInspirationSauvegarde, updateExpirationSauvegarde,updateApnéeSauvegarde,updatenombreRound} = React.useContext(ZenContext)
    //text==='round' ? updateUnit('rounds') : updateUnit(unité);
  return (
    <View style={styles.container}>
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
      <View style={styles.flex}>
          <Animated.FlatList
          data={timers}
          keyExtractor={item => item.toString()}
          horizontal={true}
          bounces={false}
          onScroll={Animated.event(
              [{nativeEvent: {contentOffset:{x:scrollX}}}],
              {useNativeDriver: true}
          )}
          onMomentumScrollEnd={ev=>{
            const index = Math.round(ev.nativeEvent.contentOffset.x/ITEM_SIZE)
            setDuration(timers[index]);
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
          }}
          style={{flexGrow:0, display:'flex', justifyContent:'center', alignItems:'center'}}
          snapToInterval={ITEM_SIZE}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: ITEM_SPACING
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
              
              return <View style={{width: ITEM_SIZE, justifyContent:'center', alignItems:'center', }}>
                  <Animated.Text style={[styles.text,{
                      opacity
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
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:'3%', 
    height:52,
    width:'70%'
  },
  text: {
    fontSize: 14,
    fontFamily: 'Menlo',
    color: colors.black,
    fontWeight: '900',
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
    top:500
  },
  flex:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
  }
});