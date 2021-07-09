import { useNavigation } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import TimeChoice from './timeChoice';
import TimeChoice2 from './TimeChoice2';
import TimeChoice3 from './TimeChoiceVertical';
import TimeChoice4 from './TimeChoiceVertical4';
import Expiration  from './../../images/sneeze.svg';
import Loading  from './../../images/loading.svg';
import { SvgUri } from 'react-native-svg';
import Breathing from './../SVG/Breathing';

function LineSettings({image,text, unité})
{
    const navigation=useNavigation();
    let [Check, updateCheck] = useState(false);
    let {inspirationSauvegarde,expirationSauvegarde,apnéeSauvegarde, nombreRound} = useContext(ZenContext)
    return(
        <View style={styles.bigContainer}>
            <View style={styles.line}>
                <View style={styles.little_Line}>
                    <Breathing/>
                    <Text style={{marginLeft:40}}>{text}</Text>
                </View>
                
                <TimeChoice text={text}/>
            </View>
        </View>
    ) 
}
export default LineSettings;
const styles = StyleSheet.create({
    counter:{
        color:"blue", 
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:'center',
        height:52,
        marginTop:15,  
        backgroundColor:'white', 
        width:'100%',
        borderRadius:15,    
    },
    bigContainer:{
        width:"90%",
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
    },
    column:{
        width:"35%",
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        width:'100%',
        textAlign:'center'
    },
    unit:{
        position:'relative',
        bottom:-20
    },
    rightContainer:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:"100%",
        backgroundColor:'white',
        padding:30,
        position:'relative',
        bottom:25,
        borderRadius:15, 
    },
    right:{    
        borderColor:'#007AFF',
        borderWidth:1,
        padding:10,
        borderRadius:5,
        backgroundColor:'white',    
    },
    rightText:{
        color:'#007AFF',
    },
    view:{
        width:"100%",
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        height:"auto" 
    },
    image:{
        height:50,
        width:50,
        overflow:'visible'
    },
    little_Line:{
        width:"40%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
})