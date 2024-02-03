const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

const symbols = "#$%&*@_";

const allChar = upperCase + lowerCase + numbers + symbols

const button1 = document.getElementById("btn");

function generatePassword() { 
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];


     while(length > password.length) {
            password += allChar[Math.floor(Math.random() * allChar.length)];
          
        }
        passwordBox.value = password;
        
}

 button1.addEventListener("click", generatePassword());
  
 function makeInputEditable() {
     document.getElementById('password').readOnly = false;
 }

image.addEventListener("click", ()=>{
      passwordBox.select();
      document.execCommand('copy');
});
