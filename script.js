const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone-no');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirm-password');


form.addEventListener('submit',function(e){
   e.preventDefault();

   validate();
})



// Main Validate function

function validate(){
   const usernameV = username.value.trim();
   const emailV = email.value.trim();
   const phoneV = phone.value.trim();
   const passwordV = password.value.trim();
   const cpasswordV = cpassword.value.trim();

   //----validate Username
   if(usernameV===""){
      setErrorMsg(username,'Username cannot be blank')
   }
   else if(usernameV.length<3){
      setErrorMsg(username, 'Username must have min 3 char')
   }
   else{
      setSuccessMsg(username);
   }

   //----validate Email
   if(emailV===""){
      setErrorMsg(email,'Email cannot be blank')
   }
   else if(isEmail(emailV)){
      setErrorMsg(email, 'Not a valid Email')
   }
   else{
      setSuccessMsg(email);
   }

   //----validate Phone No
   if(phoneV.length===0){
      setErrorMsg(phone, 'Phone No. cannot be blank')
   }
   else if(phoneV.length!==10){
   setErrorMsg(phone, 'Not a valid Phone No.')
   }
   else{
      setSuccessMsg(phone);
   }

   //----Validate Password
   if(passwordV===""){
      setErrorMsg(password,'Password cannot be blank')
   }
   else if(passwordV.length<6){
      setErrorMsg(password, 'Password must have min 6 char')
   }
   else{
      setSuccessMsg(password);
   }

   //----Validate Confirm-Password
   if(cpasswordV===""){
      setErrorMsg(cpassword,'Password cannot be blank')
   }
   else if(cpasswordV!==passwordV){
      setErrorMsg(cpassword,'Passwords donot match')
   }
   else{
      setSuccessMsg(cpassword);
   }
   
   successSubmit();
}



//email validation inner function
function isEmail(e){
   var atSymbol = e.indexOf("@");
   if(atSymbol<1) return true;
   var dot =e.lastIndexOf(".");
   if(dot<=atSymbol+2) return true;
   if(dot=== e.length-1)  return true;
   
   return false;
}


//Show Error Message for respective input box
function setErrorMsg(input,errormsg){
   const inputFiled = input.parentElement;
   const small = inputFiled.querySelector('small');
   small.innerText = errormsg;
   inputFiled.className="form-control error"
   
}
// Success function 
function setSuccessMsg(input){
   const inputFiled = input.parentElement;
   inputFiled.className="form-control success"

}


// Final Success message if all the entries are correct.
function successSubmit(){
   let count=0;
   const formControl = document.querySelectorAll(".form-control")
   formControl.forEach(function(e){
      if(e.classList.contains("success")){
         count++;
      }
      console.log(count)
   })
   if(count==5){
      swal("Good job", "Your registration was successful", "success");
   }

}