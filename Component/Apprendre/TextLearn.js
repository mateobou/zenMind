import React, { Component } from 'react';
import { StyleSheet, Platform, Share, Linking, View, Text, FlatList, ScrollView } from 'react-native';

export default function TextLearn({text, style}) {   
    return(
        <View style={{width:'90%', marginHorizontal:'5%'}}>
            <Text style={style==='bold'?styles.bold:style==="title"?styles.title:style==="p"?styles.p:styles.space}>
                {text}
            </Text>
        </View>
    );
  }
const styles = StyleSheet.create({
  bold:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10, 
    textAlign:'justify'
  },
  title:{
    fontSize:22,
    marginBottom:10,
    textAlign:'justify'
  },
  p:{
    fontSize:16,
    marginBottom:10,
    textAlign:'justify'
  }, 
  space:{
    fontSize:16,  
    textAlign:'justify'
  } 
});
