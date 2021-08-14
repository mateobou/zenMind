import React, { Component } from 'react';
import { StyleSheet, Platform, Share, Linking, View, Text, FlatList, ScrollView } from 'react-native';
import TextLearn from './TextLearn';

export default function Apprendre() {   
  
  
    let tableauComponent = []
    const text = [
      [["bold_1","1. Pour une meilleure compréhension, sur cette application nous parlons de respiration. Cependant, ces dites respirations sont en réalité des ventilations."],
      ["p_2","Le terme ventilation définis dans le médical, l’apport en l'air frais dans les poumons. Les zones conductrices des poumons impliquées dans la ventilation sont le nez, le pharynx, le larynx, la trachée, les bronches primaires, les arbres bronchiques et les bronchioles terminales."],
      ["p_3","À savoir, l'inspiration et l'expiration sont les deux événements différents de la ventilation. Tout au long de cette documentation, le terme ventilation sera utilisé de manière à transmettre l’information avec plus d’exactitude."],
      ["space",""]],
      
      [["bold_1","2. On oublie trop souvent que la ventilation est l’action qui rythme notre vie, du premier battement de notre cœur jusqu’au dernier. Ainsi, il semble logique que cette dernière influe fortement sur nos émotions, nos actions ou sur notre bien-être."],
      ["p_2","La respiration est intimement liée à nos émotions et il est important d’en avoir le contrôle durant notre vie. Que ce soit du stress, de l’énergie, ou du repos, la respiration peut avoir une forte influence sur votre bien-être."],
      ["p_3","Parmi le panel d’émotions néfastes qui existe, le stress est malheureusement trop souvent sous-estimé. En effet, le corps en réaction au stress sécrète une hormone nommée le cortisol. Cette hormone intervient dans la gestion du stress par l’organisme (adaptation de l’organisme au stress) et permet une libération de sucre à partir des réserves de l’organisme pour répondre à une demande accentuée en énergie pour les muscles, le cœur, le cerveau."]],

          [["bold_1","3. Comment fonctionne le test de respiration et comment évalue t-il ma progression ?"],
          ["p_2","En moyenne, une personne réalise 12 cycles de ventilation par minute. Cependant avec le stress et la tension, notre corps a tendance à se mettre dans une situation d'hyper ventilation de manière à rendre le corps plus réactif et plus vif. Cependant sur le long terme cette situation d’hyper ventilation est usante pour le corps humain."],
          ["p_3","C’est donc grâce à cette mécanique que le test de respiration peut évaluer de votre niveau de stress ou de votre tension en comptabilisant votre nombre de  cycles de ventilation par minute. A condition de bien respecter les indications de manière à ne pas biaiser le test."],
          ["p_4","4. Avant de vous lancer dans la ventilation, il est important de savoir quels sont les risques de la pratique. Mal exercée ou dans un cadre non approprié, la ventilation peut causer de graves dégâts."]],
      
          [["bold_1","4. Avant de vous lancer dans la ventilation, il est important de savoir quels sont les risques de la pratique. Mal exercée ou dans un cadre non approprié, la ventilation peut causer de graves dégâts."],
          ["space_2","Voici quelques règles de précautions :"],
          ["space_3","De préférence, ne soyez pas trop isolé lorsque vous réalisez une nouvelle séance de respiration."],
          ["space_4","Si vous commencez à avoir le moindre symptôme, interrompez votre session et si cela persiste consultez un professionnel."],
          ["space_5","Lorsque vous paramétrez une nouvelle séance de ventilation, faites bien attention à ce que les durées soient raisonnables ou atteignables."]], 
         [["space_1","Vous pourrez retrouver plus d’informations ou entrer en contact avec des experts spécialisé sur le site de ZenMind :"],
          ["website","https://zen-mind.fr/"]]]
      
      for (let tab of text) {
        
        for (let [clef, valeur] of tab){
          console.log(clef)
          let splitClef = clef.split('_')
          tableauComponent.push(<TextLearn text={valeur} style={splitClef[0]}/>)
        }
      }
    return (
      <ScrollView style={styles.container}>
        <Text style={{fontSize:24,fontWeight:"bold",textAlign:'center',marginTop:20}}>Apprendre à respirer</Text>
        <TextLearn text="Il est bon de savoir." style="title"></TextLearn>
        {tableauComponent.map((item)=>{
          return item
        })}
      </ScrollView>
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
