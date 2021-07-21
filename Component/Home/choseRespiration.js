import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import Selectionnable from './Selection';
import Selection from './Selection';

function choseRespiration()
{
    const RespirationArray = [{name:'Respirer pour …\ngagner en énergie',inspi:3,expi:2,type:0,round:60, destination:'Breath',apnée:0},{name:'Respirer pour …\nrécupérer',inspi:5,expi:10,type:0,round:9, destination:'Breath',apnée:20},{name:'Respirer pour …\ngérer son stress',inspi:5,expi:10,type:2,apnée:20,round:9, destination:'Breath'},{name:'Personnaliser vos séances',inspi:1,expi:1,type:1,round:1, destination:'Personnalisée',apnée:0}];
    const render = ({item})=>{
    console.log('respiration')
    console.log(item)
        return(
            <Selectionnable name={item.name} type={item.type} inspi={item.inspi} expi={item.expi} round={item.round} apnée={item.apnée} destination={item.destination}/>
        )
    }
    return(
        <View style={styles.home}>
            <FlatList data={RespirationArray} renderItem={render} keyExtractor={(item,index)=>index.toString()} numColumns={2} columnWrapperStylem={{width:"100%"}}/>
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