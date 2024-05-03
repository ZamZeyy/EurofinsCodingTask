// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.





//display 1-100
document.getElementById("btnUseFunction").addEventListener("click", function () {

    console.log("btnUseFunction clicked");
    document.getElementById("textContainer").innerHTML = ""; // Clear previous entries

    var customValue1 = document.getElementById("customValue1").value || "1"; // Default if empty
    var customValue100 = document.getElementById("customValue100").value || "100"; // Default if empty

    for (var i = 1; i <= 100; i++) {
        var text = document.createElement("p");
        

        if (i === 1) {
            text.textContent = customValue1;
        }
        else if (i === 100) {
            text.textContent = customValue100;
        }

        //if statement multiples of both 3 and 5 display “Eurofins”.
        else if (i % 3 == 0 && i % 5 == 0) {
            text.textContent = "Eurofins";
            
        }
        //if statement when a number is divisable by 5 display "Five"
        else if (i % 5 == 0) {
            text.textContent = "Five";
            

        }
        //if statement when a number is divisable by 3 display "Three"
        else if (i % 3 == 0 ) {
            text.textContent = "Three";
            
        }
        else {
            text.textContent = i;
        }
        document.getElementById("textContainer").appendChild(text);
    }
    


});


