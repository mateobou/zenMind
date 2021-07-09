useEffect(()=>{
    if(numberOfRound !== nombreRound)
    {
      if(typeDeRespiration!= 0){
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                  progress,
                  {
                    toValue: 1,
                    duration: inspirationSauvegarde*1000,
                    easing: Easing.linear()
                  }
                ),
                Animated.timing(
                  progress,
                  {
                    toValue: 1,
                    duration: apnéeSauvegarde*1000,
                    easing: Easing.linear()
                  }
                ),
                Animated.timing(
                  progress,
                  {
                    toValue: 0,
                    duration: expirationSauvegarde*1000,
                    easing: Easing.linear()
                  }
                )
          ])).start();
      }
      else{
        Animated.loop(
          Animated.sequence([
              Animated.timing(
                  progress,
                  {
                    toValue: 1,
                    duration: (inspirationSauvegarde*1000 +2000),
                    //easing: Easing.linear()
                  }
                ),
                Animated.timing(
                  progress,
                  {
                    toValue: 0,
                    duration: expirationSauvegarde*1000 +2000,
                    //easing: Easing.linear()
                  }
                )
          ])).start();
      }
    }else {
      loopBoolUpdate(false);
    }
  }, [])