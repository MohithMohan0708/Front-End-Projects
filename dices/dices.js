
function rollDice()
{
    const numberOfdices=document.getElementById("numberOfDices").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    for(let i=0;i<numberOfdices;i++)
    {
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png" alt="Dice value:${value}">`);
    }

    diceResult.textContent=`Dice: ${values.join(', ')}`;
    diceImages.innerHTML=images.join('');

}