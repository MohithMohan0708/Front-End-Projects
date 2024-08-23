const myAge=document.getElementById("myAge");
const mySubmit=document.getElementById("mySubmit");
const result=document.getElementById("result");

let age;
mySubmit.onclick=function(){
age=myAge.value;
age=Number(age);
if(age>=18 && age<100)
{
    result.textContent=`You are eligible for voting`;
}
else if(age<0)
{
    result.textContent=`You have entered an invalid age`;
}
else if(age==0)
{
    result.textContent=`You are newly born and not eligible`;
}
else if(age==100)
{
    result.textContent=`You are too old for voting`;
}
else if(age<18)
{
    let remainingage=18-age;
    result.textContent=`You are young to vote and you have to wait for ${remainingage} to become eligible for voting`;
}
}