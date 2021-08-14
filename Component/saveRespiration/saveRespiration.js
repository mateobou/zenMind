import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Modal , View, Text, Image , Button } from 'react-native';
import FootPart from './FootPart';
import HeadPart from './headPart'
function saveRespiration({route, navigation}){
    console.log(route)
    let {apnée,expi,inspi,type} = route.params;
    return(
        <View>
           <HeadPart/> 
           <FootPart inspi={inspi} expi={expi} apnée={apnée} type={type}/>
        </View>
    )   
}
export default saveRespiration;