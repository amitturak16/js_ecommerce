let userLogin = false;

window.onload = function(){
   let readCookie = document.cookie;
   console.log(readCookie)

   let dataForToken = JSON.parse(localStorage.getItem('userProfileData'));
   // console.log(dataForToken)

   for(let i = 0; i < dataForToken.length; i++){
   //   debugger;
      let loginForToken = dataForToken[i].LoginToken;

      if(readCookie == loginForToken){
         userLogin = true;
      }else{
         userLogin = false;
      }
   } //end loop
} //end function

function validate(){

 // let userProfileData = [];
   // localStorage.setItem('userProfileData',JSON.stringify(userProfileData));

if(localStorage.getItem('userProfileData') == null){
   localStorage.setItem('userProfileData','[]');
   }
  

   let fullName = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let cpassword = document.getElementById('cpassword').value;
   let address = document.getElementById('address').value;
   let mobileNumber = document.getElementById('mobile').value;
   // let loginToken = document.getElementById('loginToken').value;

   let checkFullName = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
   let checkEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
   let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
   let checkAddress = /^[a-zA-Z0-9\s,'-]*$/;
   let checkmobileNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;

   if(checkFullName.test(fullName)){
      document.getElementById('nameError').innerHTML = '';
   }else{
      document.getElementById('nameError').innerHTML = '** Invalid Full Name';
      return false;
   }

   if(checkEmail.test(email)){
      document.getElementById('emailError').innerHTML = '';
   }else{
      document.getElementById('emailError').innerHTML = '** Invalid Email';
      return false;
   }

   if(checkPassword.test(password)){
      document.getElementById('passwordError').innerHTML = '';
   }else{
      document.getElementById('passwordError').innerHTML = '** Invalid password';
      return false;
   }

   if(password.match(cpassword)){
      document.getElementById('confirmPasswordError').innerHTML = '';
   }else{
      document.getElementById('confirmPasswordError').innerHTML = '** Password not Match';
      return false;
   }
   if(checkAddress.test(address)){
      document.getElementById('addressError').innerHTML = '';
   }else{
      document.getElementById('addressError').innerHTML = '** Invalid Address';
      return false;
   }
   if(checkmobileNumber.test(mobileNumber)){
      document.getElementById('mobileNoError').innerHTML = '';
   }else{
      document.getElementById('mobileNoError').innerHTML = '** Invalid Mobile number';
      return false;
   }

   swal({
      title: "Thank you! Your registration was successful!",
      text: "click Ok for confirm your registration",
      icon: "success",
      button: "Ok",
    });

let  newUserData = {
   'fullname':fullName,
   'Email':email,
   'Password':password,
   'ConfirmPassword':cpassword,
   'Address':address,
   'MobileNumber':mobileNumber,
   'LoginToken': random_string
}; //end of object
let newUserProfileData = JSON.parse(localStorage.getItem('userProfileData'));


newUserProfileData.push(newUserData);
// console.log(newUserProfileData);

localStorage.setItem('userProfileData',JSON.stringify(newUserProfileData));

} //end of validate function


function check(){
  
   let myData = JSON.parse(localStorage.getItem('userProfileData'));

   for(let i=0; i < myData.length; i++){

      var storedUserName = myData[i].Email;
      var storedUserPass = myData[i].ConfirmPassword;
   
// debugger;
   var enterUserEmail = document.getElementById('useremail').value;
   var enterUserPassword = document.getElementById('userpassword').value;

   if(enterUserEmail == storedUserName && enterUserPassword == storedUserPass) {
     
     
         // swal({
         //    title: "Have logged in successfully",
         //    text: "You clicked the button!",
         //    icon: "success",
         //    button: "Ok",
         //  });
         //  return false;
         window.location.replace('index.html')
         //  document.getElementsByClassName('buy_btn').style.display = 'block';
      } //end of if
  
   } //end for loop
   swal({
      title: "Invalid Credentials",
      text: "Please check the email or Password",
      icon: "warning",
      button: "Ok",
    });
   return false;
} //end of validate function


   var random_string = '';
   var characters = 'ABSDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
      for(var i = 0; i < characters.length; i++){
      random_string += characters.charAt(Math.floor(Math.random() * characters.length))
   }
   // console.log(random_string) ;

   document.cookie = 'LoginToken=' + random_string + '; path=/';
   // console.log(document.cookie)

// dispaly and hide login register forms
document.getElementById('mylinks').onclick = function switchVisible() {
   document.getElementById('div2').style.display = 'block';
   document.getElementById('div1').style.display = 'none';
}
// localStorage.clear();