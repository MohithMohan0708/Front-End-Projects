
const myBox = document.getElementById("myBox");


myBox.addEventListener("click",function(event)
{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent  = " Ouch!😶‍🌫️";
}
);

myBox.addEventListener("mouseover",function(event)
{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent  = " Don't do it!🫠";
}
);

myBox.addEventListener("mouseout",function(event)
{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent  = "Click Me🙂";
}
);