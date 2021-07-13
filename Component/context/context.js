import React, { useState } from 'react';
export const ZenContext = React.createContext();
const ZenProvider = function ({ children }) {
    //variables
    /*Types de respirations : 
    [
        [0,binaire],
        [1,triangle],
        [2,triangle inversé],
        [3,carré],
    ]*/
    let [typeDeRespiration, updateTypeDeRespiration] = useState(0);
    let [nombreRound, updatenombreRound] = useState(4);
    let [inspiration, updateInspiration]= useState(40);
    let [expiration, updateExpiration]= useState(40);
    let [apnée, updateApnée]= useState(30);
    //TIMER
    //Temps total en ms
        let [tempsTotal, updateTempsTotal] = useState();
    //Temps passé 
        let [tempsPassé, updateTempsPassé] = useState(0);
    //Temps restant 
        let [tempsRestant, updateTempsRestant] = useState();
    //variables end 
    /*État du timer*/
        let [etat, updateEtat] = useState("Non démarré");
    //Inspiration temps par cycle :
    let [inspirationTemp, updateInspirationTemp] = useState();
    let [expirationTemp, updateExpirationTemp] = useState(expiration);
    //Fonctions

    function respirationBinaire()
    {
        updateInspirationTemp(inspiration);
        updateExpirationTemp(expiration)
        updateEtat("respiration binaire 1")
        setInterval(() => {
            //Si le temps d'inspiration restant >0
            if(inspirationTemp>0)//Mettre temps passsé ?
            {
                updateEtat("respiration binaire inspiration");
                /*updateTempsPassé(tempsPassé+=1);
                updateTempsRestant(tempsTotal-=1);*/
                updateInspirationTemp(inspirationTemp-=1);
                updateEtat("respiration binaire | inspirationTemp-tempsPassé > 0 | Temps d'inspiration restante : "+ inspirationTemp-tempsPassé);
                console.log("Temps d'inspiration restante :"+inspirationTemp-tempsPassé);
            }
            else if(expirationTemp > 0 && inspirationTemp === 0)
            {
                updateExpirationTemp(expirationTemp-=1);
                console.log("Temps d'expiration restant :"+expirationTemp-tempsPassé);
            }
            else if(expirationTemp === 0 && inspirationTemp ===0)
            {
                clearInterval(respirationBinaire)//bug possible
                updateEtat("round terminé")
            }
            
        }, 1000);
    }
    //Changer le nom - boucle en fonction du nombre de round
    function startBreath(nombreRound, fonction){
        for(let i; i<nombreRound; i++){
            updateEtat(etat+i);
            fonction;
        }
    }
    //Start a breath session
    function launchBreath()
    {
        console.log("Launchbreath init -------------------------")
        updateInspirationIsActive(true)
        switch (typeDeRespiration){
            case 0:
                startBreath(nombreRound, respirationBinaire());
            case 1:
                updateTempsTotal((nombreRound*(expiration+inspiration+apnée)))
                startBreath(nombreRound, respirationBinaire())
            case 2:
                updateTempsTotal((nombreRound*(expiration+inspiration+apnée)))
                startBreath(nombreRound, respirationBinaire())
            case 3:
                updateTempsTotal((nombreRound*(expiration+inspiration+apnée+apnée)))
                startBreath(nombreRound, respirationBinaire())
        }
        console.log("Launchbreath end -------------------------")
    }
    return (
        <ZenContext.Provider
            value={{inspiration, updateInspiration,tempsPassé, tempsTotal,launchBreath, tempsRestant,inspirationTemp, typeDeRespiration, nombreRound, updateExpiration, expiration,expirationTemp, etat,updateEtat}}
        >
            {children}
        </ZenContext.Provider>
        );
    };
export default ZenProvider;