//JavaScript Popup:
// JavaScript code for the contact form
//Took out the reset function and put it in the js form
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}  

//Gets the information from the Contact form:\\ 
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
    
  // Show the popup
  var popup = document.getElementById("popup");
  popup.style.display = "block";
    
  // Reset the form
  document.getElementById("contactForm").reset();
});

//JavaScript links
isValidName();
isValidEmail();
isValidPhone();

//add submit event to the form 
contactMe.addEventListener("submit", e => {
  //prevent form default behaviour
  e.preventDefault();
  // change button text
  submitBtn.innerText = "Just A Moment...";
  //get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Check if all fields are filled
  if (inputFields.name && inputFields.email && inputFields.number && inputFields.message) {
    /*send the email(add service, template ID and input field values)*/
    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      //change button text 
      submitBtn.innerText = "Message Sent Successfully";
      
      // clear out all input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    })
    .catch(error => { 
      //console log the error 
      console.log(error);
      //change button text
      submitBtn.innerText = "Something Went Wrong";
    });
  
  } else {
    // If fields are not filled, show an error message
    submitBtn.innerText = "Please fill all fields";
  }

});