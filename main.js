canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keypressed = e.keyCode;
    console.log(keypressed);

    if((keypressed >= 97 && keypressed <= 122)|| (keypressed >= 65 && keypressed <= 90)){

        alphabetkey();
        document.getElementById("d1").innerHTML="You pressed an Alphabet Key";
        console.log("alphabetkey");

    }
}

function alphabetkey(){

    img_image = "Alphabet.jpg";
    add();
    
}