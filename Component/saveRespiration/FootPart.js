import React from 'react';
import { StyleSheet , View, Text } from 'react-native';
import Dropdown from '../test_setTimer/Picker';
import LineSettings from '../Home/Line';
import Breathing  from './../../images/breathing.svg';
import Expiration  from './../../images/sneeze.svg';
import Loading  from './../../images/loading.svg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
function FootPart(){
    return(
        <View style={styles.view}>
            <Text style={styles.title}>Rappel de la session enregistrée</Text>
            <Dropdown/>
            <LineSettings image={Breathing} text="inspiration"/>
            <LineSettings image={Expiration} text="expiration"/>
            <LineSettings image={Loading} text="rounds" unité="rounds"/>
            <Pressable style={styles.button}><Text>Sauvegarder</Text></Pressable>
            <View style={{height:40}}></View>
        </View>
    );   
}
const styles = StyleSheet.create({
    input:{
        backgroundColor:'#FFE4DB',
        color:'black',
    },
    view:{
        backgroundColor:'#FDF1ED',
        height:"60%",
        paddingTop:'10%',
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:30
    },
    button:{
        width:200,
        height:40,
        backgroundColor:"#FFB7A8",
        borderRadius:7,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }
})
export default FootPart;