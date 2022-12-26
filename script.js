let images = ["dice_1.png",
"dice_2.png",
"dice_3.png",
"dice_4.png",
"dice_5.png",
"dice_6.png"];

var value_player1=0;
var value_player2=0;
var value=0;
var dieOneValue=0;
var dieTwoValue=0;
var pointer="p1";
document.querySelector("#score1").innerHTML= value_player1;
document.querySelector("#score2").innerHTML= value_player2;
document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

function roll(){

        document.querySelector("#score1").innerHTML= value_player1;
        document.querySelector("#score2").innerHTML= value_player2;
        document.querySelector("#win").innerHTML= "";
        document.querySelector("#win2").innerHTML= "";
        dieOneValue = Math.floor(Math.random()*6);
        dieTwoValue = Math.floor(Math.random()*6);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
        value = (dieOneValue +1) + (dieTwoValue + 1) ;

        if(pointer=="p1"){
            player1_chance();
        }
        else{
            player2_chance();
        }

}


function player1_chance(){

    if(dieOneValue == dieTwoValue){

        if(dieOneValue == 0){

            value_player1 = 0;
            document.querySelector("#score1").innerHTML= value_player1;
            pointer = "p2";

        }else{

            value_player1 = value_player1 + value;
            document.querySelector("#score1").innerHTML= value_player1;

            if(value_player1 >= 100){

                
                document.querySelector("#score1").innerHTML= value_player1;
                document.querySelector("#score2").innerHTML= value_player2;
                document.querySelector("#win").innerHTML= "I WON THE GAME";
                value_player1 = 0;
                value_player2 = 0;
                value = 0;
                
            }
            
            pointer = "p1";

        }
        
    }else{

        value_player1 = value_player1 + value;
        document.querySelector("#score1").innerHTML= value_player1;

        if(value_player1 >= 100){

            document.querySelector("#score1").innerHTML= value_player1;
            document.querySelector("#score2").innerHTML= value_player2;
            document.querySelector("#win").innerHTML= "I WON THE GAME";
            value_player1 = 0;
            value_player2 = 0;
            value = 0;
            

        }
        
        pointer = "p2";

    }

}

function player2_chance(){

    if(dieOneValue == dieTwoValue){

        if(dieOneValue == 0){

            value_player2 = 0;
            document.querySelector("#score2").innerHTML= value_player2;
            pointer = "p1";

        }else{

            value_player2 = value_player2 + value;
            document.querySelector("#score2").innerHTML= value_player2;

            if(value_player2 >= 100){

                document.querySelector("#score1").innerHTML= value_player1;
                document.querySelector("#score2").innerHTML= value_player2;
                document.querySelector("#win2").innerHTML= "I WON THE GAME";
                value_player1 = 0;
                value_player2 = 0;
                value = 0;
               

            }
            
            pointer = "p2";
            
        }
        
    }else{

        value_player2 = value_player2 + value;
        document.querySelector("#score2").innerHTML= value_player2;

        if(value_player2 >= 100){

            document.querySelector("#score1").innerHTML= value_player1;
            document.querySelector("#score2").innerHTML= value_player2;
            document.querySelector("#win2").innerHTML= "I WON THE GAME";
            value_player1 = 0;
            value_player2 = 0;
            value = 0;
            
        }
        
        pointer = "p1";

    }
}


function instruct(){

    document.location.href="instructions.html";

}

function Res(){

    location.reload()

}
