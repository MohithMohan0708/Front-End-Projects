
function updateTimer()
{
    const now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    const meridian=hours >=12? "PM" : "AM";
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    document.getElementById("clock").textContent=`${hours}:${minutes}:${seconds}  ${meridian}`;
}


updateTimer();
setInterval(updateTimer,1000);
