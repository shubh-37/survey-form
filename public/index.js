function validateForm() {                        //This is a function to check if every question has been answer by the user
  let x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  } else if (!document.querySelector('input[name="ques1"]:checked')) {
    alert("Age must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques2"]:checked')) {
    alert("Gender must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques3"]:checked')) {
    alert("Home Location must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques4"]:checked')) {
    alert("Marital Status must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques5"]:checked')) {
    alert("Education must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques6"]:checked')) {
    alert("Employment status must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques7"]:checked')) {
    alert("Annual Income must be checked");
    return false;
  } else if (!document.querySelector('input[name="ques8"]:checked')) {
    alert("Religion must be checked");
    return false;
  } else if (!document.querySelector('input[name="option"]:checked')) {
    alert("At least one option must be checked");
    return false;
  }
  return true;
}

function submitForm(e) {               //this function stores the input value in every variable declared
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  const name = document.forms["myForm"]["Name"].value;
  const age = document.querySelector('input[name="ques1"]:checked').value;
  const gender = document.querySelector('input[name="ques2"]:checked').value;
  const homeLocation = document.querySelector(
    'input[name="ques3"]:checked'
  ).value;
  const maritalStatus = document.querySelector(
    'input[name="ques4"]:checked'
  ).value;
  const employment = document.querySelector(
    'input[name="ques6"]:checked'
  ).value;
  const income = document.querySelector('input[name="ques7"]:checked').value;
  const education = document.querySelector('input[name="ques5"]:checked').value;
  const language = [];
  var inputElements = document.getElementsByClassName("language");
  for (var i = 0; i < inputElements.length; ++i) {
    if (inputElements[i].checked) {
      language.push(inputElements[i].value);
    }
  }
  const religion = document.querySelector('input[name="ques8"]:checked').value;
  fetch("/submitForm", {       //after every question has been answered this keyword fetches submitForm to send the answers to the server
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({     //all the values stored in the variables are sent in the form string through json
      name,
      age,
      gender,
      homeLocation,
      maritalStatus,
      employment,
      income,
      education,
      language,
      religion,
    }),
  }).then(response => response.json()).then(response => {  //after the values are sent to the server this keyword helps to open the submit.html file
     window.location = 'http://localhost:3000/submit.html';
  });
 
}