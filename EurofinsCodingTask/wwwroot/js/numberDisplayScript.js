// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.





//display 1-100

var buttonClicked = false;
var numberBackToggle = false;
document.getElementById("btnUseFunction").addEventListener("click", function () {
    buttonClicked = true;
    buttonClick();
    
});

document.getElementById("btnHide").addEventListener("click", function () {
    
    buttonHide();
    buttonClicked = false;
});

//toggleNumberBack

document.getElementById("toggleNumberBack").addEventListener("change", function () {
    numberBackToggle = this.checked;
    
    if (buttonClicked == true) {
        buttonClick();
    }
});


function buttonHide() {
    document.getElementById("textContainer").innerHTML = "";
}


function buttonClick() {
    console.log("btnUseFunction clicked");
    document.getElementById("textContainer").innerHTML = ""; // Clear previous entries

    var customValue1 = document.getElementById("customValue1").value || "1"; // Default if empty
    var customValue100 = document.getElementById("customValue100").value || "100"; // Default if empty

    for (var i = 1; i <= 100; i++) {
        var text = document.createElement("p");
        if (numberBackToggle == true) { //using == true for easier readability
            text.textContent = i;
        }
        else { 

            if (i === 1) {
                text.textContent = customValue1;
            }
            else if (i === 100) {
                text.textContent = customValue100;
            }

            //if statement multiples of both 3 and 5 display “Eurofins”.
            else if (i % 3 == 0 && i % 5 == 0) {
                text.textContent = "Eurofins";
                if (orangeToggle) {
                    text.className = "orange-background";
                }

            }
            //if statement when a number is divisable by 5 display "Five"
            else if (i % 5 == 0) {
                text.textContent = "Five";
                if (redToggle) {
                    text.className = "red-background";
                }

            }
            //if statement when a number is divisable by 3 display "Three"
            else if (i % 3 == 0) {
                text.textContent = "Three";
                console.log ("blue toggle is" + blueToggle);
                if (blueToggle) {
                    text.className = "blue-background";
                    console.log("should be blue")
                }

            }
            else if (!(i % 3 == 0 && i % 5 == 0) || !(i % 3 == 0 || i % 5 == 0)) { //if not divisable by 3 or 5 or both cover all other cases
                text.textContent = i;
            }
            else{
                console.log("how did this happen"); //should never happen but just in case
                
            }
        }
        document.getElementById("textContainer").appendChild(text);
    }

}


//if type="checkbox" id="toggleColorBlue" is checked, set blueToggle to True
var blueToggle = false;
document.getElementById("toggleColorBlue").addEventListener("change", function () {
    blueToggle = this.checked;
    console.log("blueToggle: " + blueToggle);
    if (buttonClicked == true){
        buttonClick();
    }
    
});



//if type="checkbox" id="toggleColorRed" is checked, set redToggle to True
var redToggle = false;
document.getElementById("toggleColorRed").addEventListener("change", function () {
    redToggle = this.checked;
    console.log("redToggle: " + redToggle);
    if (buttonClicked == true) {
        buttonClick();
    }
});

//if type="checkbox" id="toggleColorOrange" is checked, set orangeToggle to True
var orangeToggle = false;
document.getElementById("toggleColorOrange").addEventListener("change", function () {
    orangeToggle = this.checked;
    console.log("orangeToggle: " + orangeToggle);
    if (buttonClicked == true) {
        buttonClick();
    }
});


