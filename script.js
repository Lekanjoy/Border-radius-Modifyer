let box = document.getElementById('box');
let userInput = document.getElementById("userInput");
let userRange = document.getElementById("userRange");


userInput.addEventListener('input',()=>{
    let userInputData = userInput.value; //Setting the input value to a variable 
    userRange.value = userInputData;  //Setting the range value to be equals to the input value everytime
   

    if(userInputData <= 100){ //If the value entered is less or equal to 100%
  box.style.borderRadius = userInputData + "%" ;
   box.textContent = "Border-radius: " + userInputData + "%";
     }else{
       box.style.borderRadius = "";
       box.textContent = "More than 100%";
       box.style.color = "red";

       setTimeout(()=>  box.style.color = 'black'
       ,10000);
    };

     if (userInputData <= 50) {// if value is 1-50, range colour is green
       userRange.style.accentColor = "green";
     }else if ( userInputData > 50 && userInputData <= 70) {// if value is greater than 50 and less or equal to 70, range colour is yellow
         userRange.style.accentColor = "yellow";
     } else {
       userRange.style.accentColor = "red"; // if value is 71-100, range colour is red
     }


});

userRange.addEventListener('click',() => {
  let userRangeData = userRange.value; //Setting the range value to a variable
  userInput.value = userRangeData; //Setting the  input value to be equals to the range value everytime

  box.style.borderRadius = userRangeData + "%";
  box.textContent = "Border-radius: " + userRangeData + "%";

 if (userRangeData <= 50) { // if value is 1-50. range colour is green
       userRange.style.accentColor = "green";
     }else if ( userRangeData > 50 && userRangeData <= 70) { // if value is greater than 50 and less or equal to range colour is yellow
         userRange.style.accentColor = "yellow";
     } else {
       userRange.style.accentColor = "red"; // if value is 71-100, range colour is red
     }
});



 