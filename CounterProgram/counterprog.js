const decreasebtn = document.getElementById("DecreaseBtn");
const increasebtn = document.getElementById("IncreaseBtn");
const resetbtn = document.getElementById("ResetBtn");
const countlabel = document.getElementById("CountLabel");

let count = 0;

increasebtn.onclick=function(){
    count+=1;
    countlabel.textContent=count;
}



decreasebtn.onclick=function(){
    count-=1;
    countlabel.textContent=count;
}


resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
