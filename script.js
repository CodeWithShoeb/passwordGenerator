const passwordBox=document.getElementById("password")
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTYVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="1234567890"
const symbol="!@#$%^&*()?|{}~_-+=,.:"

const allchars=upperCase+lowerCase+number+symbol;


function createPass(){
  let password="";
  password +=upperCase[Math.floor(Math.random()*upperCase.length)]
  password +=lowerCase[Math.floor(Math.random()*lowerCase.length)]
  password +=number[Math.floor(Math.random()*number.length)]
  password +=symbol[Math.floor(Math.random()*symbol.length)]

  while(length>password.length){
    password +=allchars[Math.floor(Math.random()*allchars.length)]
  }

  passwordBox.value=password;
}



function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}