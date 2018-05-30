var aiBrain = {
  request : function () {
    var usrInputS = usrInput.value;
    usrInput.value = "";
    usrInputDisplay.innerHTML = usrInputS;
    aiStatsEle.innerHTML = "thinking";
    var usrInputA = usrInputS.split(" ");
    //create the friendly grammer pattern! (excited)
    var grammerPatternSubmit = [];
    for(i=0;i<usrInput.length;i++){
      var analysisWord = usrInput[i];
      if(aiDict.verb.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(2);
      }else if(aiDict.verbPP.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(3);
      }else if(aiDict.verbSP.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(4);
      }else if(aiDict.adjective.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(5);
      }else if(aiDict.adverb.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(6);
      }else if(aiDict.sPronoun.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(7);
      }else if(aiDict.oPronoun.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(8);
      }else if(aiDict.pPronoun.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push(9);
      }else if(aiDict.preposition.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push("!");
      }else if(aiDict.conjunction.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push("@");
      }else if(aiDict.determiner.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push("#");
      }else if(aiDict.exclamation.indexOf(analysisWord)!=-1){
        grammerPatternSubmit.push("$");
      }else if(aiDict.verb.indexOf(analysisWord)!=-1&&aiDict.verbPP.indexOf(analysisWord)!=-1&&aiDict.verbSP.indexOf(analysisWord)!=-1&&aiDict.adjective.indexOf(analysisWord)!=-1&&aiDict.adverb.indexOf(analysisWord)!=-1&&aiDict.sPronoun.indexOf(analysisWord)!=-1&&aiDict.oPronoun.indexOf(analysisWord)!=-1&&aiDict.pPronoun.indexOf(analysisWord)!=-1&&aiDict.preposition.indexOf(analysisWord)!=-1&&aiDict.conjunction.indexOf(analysisWord)!=-1&&aiDict.determiner.indexOf(analysisWord)!=-1&&aiDict.exclamation.indexOf(analysisWord)!=-1) {
        grammerPatternSubmit.push("%");
      }
      var gramNetowrk = this.decodeGramPat(grammerPatternSubmit);
      var product = this.createCode();
    }
  },
  decodeGramPat : function (patternA) {
    var patternS = patternA.join("");
  },
  learnKeys : function () {

  },
  createCode : function (networkAuth) {

  }
}
