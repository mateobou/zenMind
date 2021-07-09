import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import Selectionnable from './Selection';
import Selection from './Selection';

function choseRespiration()
{
    const RespirationArray = [{name:'Énergie',inspi:3,expi:2,type:0,round:36, destination:'Breath',apnée:0},{name:'Récupérer',inspi:5,expi:10,type:1,round:5, destination:'Breath',apnée:20},{name:'Gérer son stress',inspi:3,expi:2,type:0,round:36, destination:'Breath',apnée:0},{name:'Personnalisée',inspi:1,expi:1,type:1,round:1, destination:'Personnalisée',apnée:0}];
    const render = ({item})=>{
        console.log('respiration')
        console.log(item)
        return(
            <Selectionnable name={item.name} type={item.type} inspi={item.inspi} expi={item.expi} round={item.round} apnée={item.apnée} destination={item.destination}/>
        )
    }
    return(
        <View style={styles.home}>
            <FlatList data={RespirationArray} renderItem={render} keyExtractor={(item,index)=>index.toString()} numColumns={2}/>
        </View>
    )
}
export default choseRespiration;
const styles = StyleSheet.create({
    home:{
        width:"100%",
        height:"100%",
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-start',
        flexWrap:'wrap',
        flexDirection:'row',
    }
});