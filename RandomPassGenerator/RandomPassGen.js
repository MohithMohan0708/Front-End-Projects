
function generatePassword(length,includeLowerCase,includeUpperCase,includeSymbol,includeNumber)
{
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-=";
    let password="";
    let allowedChars="";

    allowedChars+=includeLowerCase?lowercaseChars:"";
    allowedChars+=includeUpperCase?uppercaseChars:"";
    allowedChars+=includeNumber?numberChars:"";
    allowedChars+=includeSymbol?symbolChars:"";

    if(length<=0)
    {
        return `Password length must be atleast one`;
    }
    if(allowedChars.length===0)
    {
        return `You should select atleast any one of the set of Characters`;
    }
    for(let i=0;i<length;i++)
    {
        let randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    return password;
}


const length=10;
const includeNumber=true;
const includeLowerCase=true;
const includeUpperCase=true;
const includeSymbol=true;

const password=generatePassword(length,includeLowerCase,includeUpperCase,includeSymbol,includeNumber);

console.log(`Your password is : ${password}`);