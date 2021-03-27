// data from register form
let userName = document.getElementById('name');
let mobile = document.getElementById('mobile');
let address = document.getElementById('address');
let email = document.getElementById('email');
let password = document.getElementById('password');
let loginToken = document.getElementById('login_token');

// storing input from register from
function store(){
  localStorage.setItem('userName', userName.value);
  localStorage.setItem('mobile', mobile.value);
  localStorage.setItem('address', address.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
  localStorage.setItem('loginToken', loginToken.value);
}


// check if stored data from register-form is equal to entered data in the   login-form
function check(){
  
  // stored data from registerd form
  let storedName = localStorage.getItem('userName');
  let storedPassword = localStorage.getItem('password');

  //enterd data from the login form
  let enterUserName = document.getElementById('userName').value;
  let enetrUserPw = document.getElementById('userPw').value;

  //  check if stored data from register-form is equal to data from login form
    if(enterUserName == storedName && enetrUserPw == storedPassword){
      alert('you are successfully Log in')
    }else{
      alert('invalid username and password')
    }
}
// localStorage.clear(); 

// regex form validation

function formValidation(){
  let FullName = document.getElementById('name');
  let mobile = document.getElementById('mobile');
  let address = document.getElementById('address');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let loginToken = document.getElementById('login_token');

  let FullNameCheck = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  let mobileCheck = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  let addressCheck = /^\s*\S+(?:\s+\S+){2}/;
  let emailCheck = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
  // let loginTokeCheck = 

  if(FullNameCheck.test(FullName)){
    document.getElementById('errorName').innerHTML = '';
  }else{
    document.getElementById('errorName').innerHTML = '** Invalid Username';
    return false;
  }

  if(mobileCheck.test(mobile)){
    document.getElementById('errorMobile').innerHTML = '';
  }else{
    document.getElementById('errorMobile').innerHTML = '** Invalid Mobile Number';
    return false;
  }
  if(addressCheck.test(address)){
    document.getElementById('errorAddress').innerHTML = '';
  }else{
    document.getElementById('errorAddress').innerHTML = '** Invali Address';
    return false;
  }
  if(emailCheck.test(email)){
    document.getElementById('errorEmail').innerHTML = '';
  }else{
    document.getElementById('errorEmail').innerHTML = '** Invalid Email Id'
    return false;
  }
  if(passwordCheck.test(password)){
    document.getElementById('errorPassword').innerHTML = '';
  }else{
    document.getElementById('errorPassword').innerHTML = '** Invalid Password'
    return false;
  }
}













var $loginMsg = $('.loginMsg'),
  $login = $('.login'),
  $signupMsg = $('.signupMsg'),
  $signup = $('.signup'),
  $frontbox = $('.frontbox');

$('#switch1').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.addClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

$('#switch2').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.removeClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

setTimeout(function(){
  $('#switch1').click()
},1000)

setTimeout(function(){
  $('#switch2').click()
},3000)