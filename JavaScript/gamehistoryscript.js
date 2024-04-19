//random fact game

function play(){
        var rndInt;
        rndInt = rndInteger(1,8);
    if (rndInt == 1){
        document.getElementById("result").innerHTML="30% of women over 35 are still in junior tech positions, compared to just 5% of men despite software competency"+"<br></br>";
    }
    if (rndInt == 2){
        document.getElementById("result").innerHTML="85% of Women in Tech say that they love their job."+"<br></br>";
    }
    if (rndInt == 3){
        document.getElementById("result").innerHTML=" Female Tech positions are growing 238% faster than their male counterparts"+"<br></br>";
    }
    if (rndInt == 4){
        document.getElementById("result").innerHTML="Businesses with a diverse executive team are 25% more likely to have above average profitability"+"<br></br>";
    }
    if (rndInt == 5){
        document.getElementById("result").innerHTML="3% of women in tech identify as black"+"<br></br>";
    }
    if (rndInt == 6){
        document.getElementById("result").innerHTML="Black women CEOs are paid 38% less than white male CEOs"+"<br></br>";
    }
    if (rndInt == 7){
        document.getElementById("result").innerHTML="Women make up 33% of the tech-related workforce"+"<br></br>";
    }
    if (rndInt == 8){
        document.getElementById("result").innerHTML="Over 50% of women in tech report harassment and sexism"+"<br></br>";
    }
}

function rndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function change1980(x,image)
{
 if(x==1)
 {
    image.src='./Photos/1980i.png';
 }
 if(x==2)
 {
    image.src='./Photos/1980.png';
 }
}

//change numbers 

function change1942(x,image)
{
 if(x==1)
 {
    image.src='./Photos/1942i.png';
 }
 if(x==2)
 {
    image.src='./Photos/1942.png';
 }
}

function change1926(x,image)
{
 if(x==1)
 {
    image.src='./Photos/1926i.png';
 }
 if(x==2)
 {
    image.src='./Photos/1926.png';
 }
}

function change1971(x,image)
{
 if(x==1)
 {
    image.src='./Photos/1971i.png';
 }
 if(x==2)
 {
    image.src='./Photos/1971.png';
 }
}

function change1871(x,image)
{
 if(x==1)
 {
    image.src='./Photos/1871i.png';
 }
 if(x==2)
 {
    image.src='./Photos/1871.png';
 }
}

function change1842(x,image)
{
 if(x==1)
 {
    image.src='./Photos/1842i.png';
 }
 if(x==2)
 {
    image.src='./Photos/1842.png';
 }
}
