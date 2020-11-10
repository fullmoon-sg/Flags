

document.querySelector("#register-form").addEventListener('submit', function(event){
   event.preventDefault();

   //error flags

   let usernameWrongLength = false;
   let passwordHasNoSpecialCharacter = false;
   let passwordNotMatch = false;

   let username = document.querySelector("#username").value;
   if(username.length < 3 || username.length > 15)
   {
       usernameWrongLength = true;
   }

   
   let specialCharacters = "@#$%^&!";
   let password = document.querySelector("#password").value;
   for (let char of password)
   {
       if(specialCharacters.includes(char )){
           hasSpecialCharacter = true;
           break;
       }
   }
   if (!hasSpecialCharacter){
       passwordHasNoSpecialCharacter = true;
   }

   let passwordReentry = document.querySelector("#password2").value;
   if (passwordReentry != password)
   {
       passwordNotMatch = true;
   }

   if(!usernameWrongLength){
       document.querySelector("#register-from").submit();
   }




})