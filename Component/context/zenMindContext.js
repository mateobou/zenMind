import React, { useEffect, useState } from "react";
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
export const ZenContext = React.createContext();
const ZenProvider = function ({ children }) {

  const MMKV = new MMKVStorage.Loader().initialize();
//variables
    /*Types de respirations : 
    [
        [0,binaire],
        [1,triangle],
        [2,triangle inversé],
        [3,carré],
    ]*/
    let [numberOfRound, updateNumberOfRound] = useState(1);
    let [typeDeRespiration, updateTypeDeRespiration] = useState(0);
    let [inspirationIsActive, updateInspirationIsActive] = useState(true);
    let [expirationIsActive, updateExpirationIsActive] = useState(false);
    let [nombreRound, updatenombreRound] = useState(1);
    let [inspirationSauvegarde, updateInspirationSauvegarde]= useState(1);
    let [expirationSauvegarde, updateExpirationSauvegarde]= useState(1);
    let [apnéeSauvegarde, updateApnéeSauvegarde]= useState(1);
    let [breathStart, updateBreathStart] = useState(false)
    let [apnée, updateApnée]= useState(apnéeSauvegarde);
    const [feedbackHistory, setFeedbackHistory] = useMMKVStorage("history", MMKV);
    const [breathList, setBreathList] = useMMKVStorage("breathing", MMKV);
    const [Test, setTest] = useMMKVStorage("Test", MMKV);
    const [nameBreath, setNameBreath] = useState()
    const [numberCycle, setNumberCycle] = useState(0)
    
    if (breathList === undefined || breathList===null)
    {
      setBreathList([{name:"Prenez l'air", destination:'Respiration'}])
    }
    //variables end 
    /*État du timer*/        
    //Inspiration temps par cycle :
    let [inspiration, updateInspiration] = useState(inspirationSauvegarde);
    let [expiration, updateExpiration] = useState(expirationSauvegarde);
    const [valueFeedback,updateValueFeedback] = useState(1);
    const [feedback,setFeedback] = useState();
    let [etat, updateEtat] = useState("C'est parti !");
    const palettes = {
        paletteVerte:{
            button:"#DEF7FF",
            text:"#24442A",
            icons:"#3A8DAA"
        },
        palette2:
        {
            button:"#FFB7A8",
            text:"#FFB7A8",
            icons:"#FFB7A8" 
        },
        palette3:
        {
            button:"#FFFFFF",
            text:"#000000",
            icons:"#000000" 
        },
        palette4:{
          button:"#DEF7FF",
          text:"#24442A",
          icons:"#24442A"
        }
    }
    //Messages : 
    const messages = ["Calme, sérénité, force intérieure sont là !"]
    function updateFeedback(){
      setFeedback({date:new Date(),value:valueFeedback})
      setFeedbackHistory([...feedbackHistory,{...feedback}])
      return [...feedbackHistory,{...feedback}]
      //Si valueFeedback est null ?
    } 
    //Fonctions
  return (
    <ZenContext.Provider
      value={{inspiration, expiration,breathStart, updateBreathStart,updateInspirationIsActive,updateExpirationIsActive,inspirationIsActive,expirationIsActive, etat, updateInspiration,updateExpiration,updateTypeDeRespiration, updateEtat,typeDeRespiration, nombreRound, updatenombreRound,apnée, updateApnée, updateApnéeSauvegarde,inspirationSauvegarde,expirationSauvegarde,apnéeSauvegarde, updateInspirationSauvegarde,updateExpirationSauvegarde,messages,apnéeSauvegarde, numberOfRound, updateNumberOfRound,MMKV,valueFeedback,updateValueFeedback,feedback,setFeedback,updateFeedback,breathList, setBreathList,nameBreath, setNameBreath,numberCycle, setNumberCycle,Test, setTest,palettes}}>
      {children}
    </ZenContext.Provider>
  );
};
export default ZenProvider;