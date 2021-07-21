import React, { Component } from 'react';
import { StyleSheet, Platform, Share, Linking, View, Text, FlatList } from 'react-native';

export default function Apprendre() {   
  
  
    function rend({item}){
      return <Text style={styles.text}>{item}</Text>
    }
    const text = ["Il est bon de Savoir.","1. Pour une meilleure compréhension, nous parlons sur cette application de respiration. Cependant, ces dites respirations sont en réalité des ventilations.","Le terme ventilation définis dans le médical, l’apport en l'air frais dans les poumons. Les zones conductrices des poumons impliquées dans la ventilation sont le nez, le pharynx, le larynx, la trachée, les bronches primaires, les arbres bronchiques et les bronchioles terminales.À savoir, l'inspiration et l'expiration sont les deux événements différents de la ventilation. Tout au long de cette documentation, le terme ventilation sera utilisé de manière à transmettre l’information avec plus d’exactitude.","2. On oublie trop souvent que la ventilation est l’action qui rythme notre vie, du premier battement de notre cœur jusqu’au dernier. Ainsi, il semble logique que cette dernière influe fortement sur nos émotions, nos actions ou sur notre bien-être.","La respiration est intimement liée à nos émotions et il est important d’en avoir le contrôle durant notre vie. Que ce soit du stress, de l’énergie, ou du repos, la respiration peut avoir une forte influence sur votre bien-être.","Parmi le panel d’émotions néfaste qui existe, le stress est malheureusement trop souvent sous-estimé. En effet, le corps en réaction au stress sécrète une hormone nommée le cortisol. Cette hormone intervient dans la gestion du stress par l’organisme (adaptation de l’organisme au stress) et permet une libération de sucre à partir des réserves de l’organisme pour répondre à une demande accentuée en énergie pour les muscles, le cœur, le cerveau…","3. Avant de vous lancer dans la ventilation, il est important de savoir quels sont les risques de la pratique. Mal exercée ou dans un cadre non approprié, la ventilation peu causer de graves dégâts.","Voici quelques règles de précautions :","De préférence, ne soyez pas trop isolé lorsque vous réalisez une nouvelle séance de respiration.","Si vous commencez à avoir le moindre symptôme intérrompez votre session et si cela persiste consultez un professionnel.","Lorsque vous paramétrez une nouvelle séance de ventilation, faîtes bien attention à ce que les durées soient raisonnables ou atteignable."]
    return (
      <View style={styles.container}>
        <Text style={{fontSize:24,fontWeight:"bold",textAlign:'center',marginTop:20}}>Apprendre à respirer</Text>
          <FlatList data={text} renderItem={rend}/>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    
  },
  text: {
    width:"85%", 
    marginHorizontal:"7%",
    marginTop:10, 
    fontSize:14
  },
});