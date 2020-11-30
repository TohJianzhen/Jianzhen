'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highest = 0;

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    document.querySelector(".number").textContent = number;


    if(score > 0)
    {
        if(!guess)
        {
            document.querySelector('.message').textContent = "Please enter a number!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else if(guess === number)
        {
            document.querySelector('.message').textContent = "CONGRATULATIONS!!!";
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
            if(score > highest)
            {
                highest = score;
                document.querySelector(".highscore").textContent = highest;
            }

        }
        else if(guess > number)
        {
            document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else if(guess < number)
        {
            document.querySelector('.message').textContent = "Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        }
    }
    else 
    {
        document.querySelector('body').style.backgroundColor = "#B00D23";
        document.querySelector('.message').textContent = "You Lose :(";
    }
});

document.querySelector(".again").addEventListener("click", function()
{
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Please enter a number!";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});
