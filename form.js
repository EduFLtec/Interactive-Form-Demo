//Variable Declarations
let checkboxY = document.getElementById('engExpY');
let checkboxN = document.getElementById('engExpN');
let selectionDiv = document.getElementById('expSelection');

let saveForm = document.getElementById('saveForm');

//Toggle English experince drop down
checkboxY.addEventListener('change', function(event){
  if (checkboxY.checked == true) {
    selectionDiv.style.display = 'Block';
  } else {
    selectionDiv.style.display = 'None';
  }
});

//Clear English experince drop down
checkboxN.addEventListener('change', function(event){
    selectionDiv.style.display = 'None';
});

// Save typed form inputs 
saveForm.addEventListener('submit', function(event){
  event.preventDefault();
  let nameText = saveForm.elements[0].value;
  let ageText = saveForm.elements[1].value;
  let fromText = saveForm.elements[2].value;
  let doesHaveExp = saveForm.elements[3].checked;
  let noExp =  saveForm.elements[4].checked;
  let expText = 'No Experience'; 
  
  // Client-side form validation checks
  if (nameText == '') {
  alert("What's your name?");
  return;
  }
  if (ageText == '') {
     alert("How old are you?");
     return;
  }

  if (isNaN(ageText)){
    alert("Please enter your age as a number.")
    return;
  }

  if (fromText == ''){ 
  alert("Where are you from?")
  return;
  }

  if (!doesHaveExp && !noExp) {
    alert("Do you have any experince studying English?")
  return;
  }
  // Save English experince drop down input
  if (doesHaveExp) 
  {
    expText = saveForm.elements[5].value; 
  }

//Publish user input in alert
alert('Personal Information Saved!\n' +
  nameText + '\n' + 
  ageText + '\n' + 
  fromText + '\n' + 
  expText
  );

});