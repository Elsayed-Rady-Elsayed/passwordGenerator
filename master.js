const passwordInputField = document.getElementById("password");
const generate = document.getElementById("generate");
const length = 12;
const Uppercharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCaserCharaters="abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialSempols = "#$@%^&*()_+~{}[]<>/-=";
const allChars = Uppercharacters + LowerCaserCharaters+numbers+specialSempols;

function genrateRandomPassword(){
    let password = "";
    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordInputField.value = password;
}

generate.addEventListener("click",genrateRandomPassword);

function CopyPassword(){
    passwordInputField.select();
    document.execCommand("copy");
}