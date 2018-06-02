/*©️2018 Tomoyoshi Yamamoto, element manager*/
var usrInput = document.getElementById("usrInput");
var usrInputDisplay = document.getElementById("usrInputDisplay");
var aiStatsEle = document.getElementById("aiStatsEle");
var submitBtn = document.getElementById("submitBtn");

submitBtn.disabled = true;
usrInput.onkeyup = function () {
  if(usrInput.value.length == 0){
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
