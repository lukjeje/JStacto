var player_one = 1;
function my(y) {

   var x = document.getElementsByClassName("luk");
   var nigga = document.getElementById("turn");

   if ( player_one == 1 ){

     if (x[y].textContent == "") {

       x[y].innerHTML = "<snap class='XO'>X</snap>";
       player_one = 0;
       nigga.innerHTML = "turn: O";
     }else{};

  }else{

     if (x[y].textContent == "") {

       x[y].innerHTML = "<snap class='XO'>O</snap>";
       player_one = 1;
       nigga.innerHTML = "turn: X";

     }else{};

  };   
  

//Xwin situations

 //0 
 if (x[0].textContent === "X" && x[1].textContent === "X" && x[2].textContent === "X") {
    winF("A");
 };

 if (x[0].textContent === "X" && x[3].textContent === "X" && x[6].textContent === "X") {
   winF("A");
 };

 if (x[0].textContent === "X" && x[4].textContent === "X" && x[8].textContent === "X") {
   winF("A");
 };

 //1
  
 if (x[1].textContent === "X" && x[4].textContent === "X" && x[7].textContent === "X") {
   winF("A");
 };

 //2
 if (x[2].textContent === "X" && x[4].textContent === "X" && x[6].textContent === "X") {
   winF("A");
 };

 if (x[2].textContent === "X" && x[5].textContent === "X" && x[8].textContent === "X") {
   winF("A");
 };

 //3
 if (x[3].textContent === "X" && x[4].textContent === "X" && x[5].textContent === "X") {
   winF("A");
 };

 //6
 if (x[6].textContent === "X" && x[7].textContent === "X" && x[8].textContent === "X") {
   winF("A");
 };
 //----------------



 //Owin situations

 //0 
 if (x[0].textContent === "O" && x[1].textContent === "O" && x[2].textContent === "O") {
   winF("B");
};

if (x[0].textContent === "O" && x[3].textContent === "O" && x[6].textContent === "O") {
   winF("B");
};

if (x[0].textContent === "O" && x[4].textContent === "O" && x[8].textContent === "O") {
   winF("B");
};

//1

if (x[1].textContent === "O" && x[4].textContent === "O" && x[7].textContent === "O") {
   winF("B");
};

//2
if (x[2].textContent === "O" && x[4].textContent === "O" && x[6].textContent === "O") {
   winF("B");
};

if (x[2].textContent === "O" && x[5].textContent === "O" && x[8].textContent === "O") {
   winF("B");
};

//3
if (x[3].textContent === "O" && x[4].textContent === "O" && x[5].textContent === "O") {
   winF("B");
};

//6
if (x[6].textContent === "O" && x[7].textContent === "O" && x[8].textContent === "O") {
   winF("B");
};
//----------------


};

function rel() {
   location.reload();
};

function winF(g) {
   document.getElementById("alert").style.display = "flex";
   document.getElementById("black").style.display = "block";
     
     if (g == "A") {
      document.getElementById("winalert").innerHTML = "X Win";
     } else {
      document.getElementById("winalert").innerHTML = "O Win";

     }

  };

function wrel() {
   rel();
};