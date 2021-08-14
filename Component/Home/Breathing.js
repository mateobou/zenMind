import * as React from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import sunsetBackground from './../../images/bg3.png'
import  BreathProgressBar from './../Respiration/ProgressBar'
import Lot from './Lottie';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Energie from "./../../images/energiser.jpg";
import Endurance from "./../../images/endurance.jpg";
import Stress from './../../images/Stress.jpg'
import Counter from '../Respiration/Counter';
import Message from '../Respiration/Message';
import { ZenContext } from '../context/zenMindContext';
import { useIsFocused } from '@react-navigation/native';
import soundTest from '../soundTest/soundTest';
import SoundTest from '../soundTest/soundTest';
const { width } = Dimensions.get('window');
const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};
    const ITEM_SIZE = width * 0.38;
      export default function Breathing({navigation,route}) {
        const isFocused = useIsFocused()
  
    
        let title;
        const [sound, setSound] = React.useState();
        route.params === undefined ? title="Personnalisée":title= route.params.title;
        let {updateNumberOfRound,breathStart} = React.useContext(ZenContext)

return (
    <>
      <View style={styles.container}>
        <ImageBackground source={title==="Respirer pour …\ngagner en énergie"? Energie : title==="Respirer pour …\nrécupérer"? Endurance : title==="Respirer pour …\ngérer son stress"? Stress:title==='Personnaliser vos séances' ?title===undefined || title===null :sunsetBackground} style={{width:"100%", height:"100%"}}>
          <BreathProgressBar/>
          <Counter func={console.log("hello")}/>

          <Message/>
          <SoundTest/>
          <Pressable style={{backgroundColor:'white',width:'40%', height:'7%',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',marginHorizontal:'30%',position:'absolute', bottom:50}} onPress={()=>{
            navigation.navigate("Home")
            updateNumberOfRound(1)
        
            }}><Text style={{fontWeight:'bold'}}>Sortir</Text></Pressable>  
        </ImageBackground>
      </View>
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
