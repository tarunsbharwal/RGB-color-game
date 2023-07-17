var num_squares = 6;
var color = generate_random_colors(num_squares);
var squares = document.querySelectorAll(".square")
var colorDisplay= document.getElementById("colorDisplay")
var messageDisplay= document.getElementById("message")
var h1= document.querySelector("h1");
var resetButton = document.getElementById("reset")
var picked_color=pickColor();
var modeButtons = document.querySelectorAll(".mode")

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="Easy"){
            num_squares=3;
        }else{
            num_squares=6;
        }
        reset();
    })
}

function reset(){
    resetButton.textContent="NEW COLORS"
    messageDisplay.textContent=""
    color= generate_random_colors(num_squares);
    picked_color= pickColor();
    colorDisplay.textContent= picked_color;
    for(var i=0;i<squares.length;i++){
        if(color[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=color[i];
        }else{
            squares[i].style.display="none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click",function(){
    reset();

})


colorDisplay.textContent=picked_color;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color[i];

    squares[i].addEventListener("click",function(){
        var clicked_color= this.style.backgroundColor
        if(clicked_color===picked_color){
            messageDisplay.textContent="Correct";
            h1.style.backgroundColor= clicked_color;
            resetButton.textContent="PLAY AGAIN!"
            changeColor(clicked_color);
                
        }else{
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent="Try Again";
        }
    })
}


function changeColor(color){
    for(var i=0;i<color.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random= Math.floor(Math.random()*color.length)
    return color[random];

}

function generate_random_colors(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(random_color())

    }
    return arr;
}

function random_color(){
 var r= Math.floor(Math.random()*256);
 var g= Math.floor(Math.random()*256);
 var b= Math.floor(Math.random()*256);

 return "rgb(" + r + ", " + g + ", " + b + ")";

}
