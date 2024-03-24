// NUMBER GUESSING GAME

const minimum=1;
const maximum=100;
const answer=Math.floor(Math.random()*(maximum-minimum+1))+minimum;

let guess;
let attempts=0;
let running=true;

while(running)
{
    guess=window.prompt(`Enter a number between ${minimum}and ${maximum}`);
    guess=Number(guess);

    if(isNaN(guess))
    {
        window.alert(`Enter a valid number`);
    }
    else if(guess<minimum || guess>maximum)
    {
        window.alert(`You are not in the range`);
    }
    else{
        attempts+=1;
        if(guess>answer)
        {
            window.alert(`YOU ARE TOO HIGH! TRY AGAIN`);
        }
        else if(guess<answer)
        {
            window.alert(`YOU ARE TOO LOW! TRY AGAIN`);
        }
        else
        {
            window.alert(`YOU ARE CORRECT! YOU HAVE GUESSED IN ${attempts} ATTEMPTS`);
            running=false;
        }
    }
}