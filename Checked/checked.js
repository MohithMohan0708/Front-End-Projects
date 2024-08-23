const myCheckbox=document.getElementById("myCheckbox");
const myVisa=document.getElementById("myVisa");
const myMasterCard=document.getElementById("myMasterCard");
const mypaypal=document.getElementById("mypaypal");
const mySubmit=document.getElementById("mySubmit");
const subresult=document.getElementById("subresult");
const finalresult=document.getElementById("finalresult");



mySubmit.onclick=function(){
    if(myCheckbox.checked)
    {
        subresult.textContent="You are Subscribed";
    }
    else{
        subresult.textContent=`You are not subscribed`;
    }

    if(myVisa.checked)
    {
        finalresult.textContent=`You have used your Visa card`;
    }
    else if(myMasterCard.checked)
    {
        finalresult.textContent=`You have used your MasterCard card`;
    }
    else if(myPaypal.checked)
    {
        finalresult.textcontent=`You have used your PayPal card`;
    }
    else
    {
        finalresult.textContent=`You must select a card type`;
    }
}