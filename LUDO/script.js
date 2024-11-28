var  score1=0,score2=0,win=0,chance=1;

const p1=document.getElementById("player1");
const p2=document.getElementById("player2");
const start=document.getElementById("start");

function checkinput()
{
 
    if(p1.value!==''&&p2.value!=='')
    {
        start.disabled=false;
    }
    else{
        start.disabled=true;
    }

}

p1.addEventListener('input',checkinput);
p2.addEventListener('input',checkinput);

function startgame()
{
    document.getElementById("player1.1").innerHTML=p1.value;
    document.getElementById("player1.2").innerHTML=p1.value;

    document.getElementById("player2.1").innerHTML=p2.value;
    document.getElementById("player2.2").innerHTML=p2.value;

    p1.disabled=true;
    p2.disabled=true;
    start.disabled=true;

    document.getElementById("reset").disabled=false;
    document.getElementById("rolldice1").disabled=false;

}

function switchplayer(){
    if(chance==1)
    {
        document.getElementById("rolldice1").disabled=false;
        document.getElementById("rolldice2").disabled=true;
    }
    else
    {
        document.getElementById("rolldice1").disabled=true;
        document.getElementById("rolldice2").disabled=false;
    }
}

function p1playing()
{
    score1 = Number(document.getElementById("p1score").innerHTML);
    let r1 = Math.floor((Math.random()*6)+1);
    
    switch(r1)
    {
        case 1:{
            document.getElementById("dice6").src="dice1.png"
            break;
        }
        case 2:{
            document.getElementById("dice6").src="dice2.png"
            break;
        }
        case 3:{
            document.getElementById("dice6").src="dice3.png"
            break;
        }
        case 4:{
            document.getElementById("dice6").src="dice4.png"
            break;
        }
        case 5:{
            document.getElementById("dice6").src="dice5.png"
            break;
        }
        case 6:{
            document.getElementById("dice6").src="dice6.png"
            break;
        }
        default:{
            break;
        }
        
        
    }
    if(r1==6)
    {
        chance=2;
        switchplayer();
        
    }
    
    else
    {
        score1=(score1+r1);
        document.getElementById("p1score").innerHTML=score1;
        if(score1>=100)
        {
              alert(p1.value+" is the winner");
        }
    }


   




}

function p2playing()
{
    score2 = Number(document.getElementById("p2score").innerHTML);
    let r2 = Math.floor((Math.random()*6)+1);
    
    switch(r2)
    {
        case 1:{
            document.getElementById("dice5").src="dice1.png"
            break;
        }
        case 2:{
            document.getElementById("dice5").src="dice2.png"
            break;
        }
        case 3:{
            document.getElementById("dice5").src="dice3.png"
            break;
        }
        case 4:{
            document.getElementById("dice5").src="dice4.png"
            break;
        }
        case 5:{
            document.getElementById("dice5").src="dice5.png"
            break;
        }
        case 6:{
            document.getElementById("dice5").src="dice6.png"
            break;
        }
        default:{
            break;
        }
        
        



    }
    if(r2==6)
        {
            chance=1;
            switchplayer();
            
        }
        else
        {
            score2=(score2+r2);
            document.getElementById("p2score").innerHTML=score2;

            if(score2>=100)
                {
                      alert(p2.value+" is the winner");
                }
        }





}