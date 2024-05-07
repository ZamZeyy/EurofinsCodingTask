/*////////////////////////////////////////////////////////////////////////////
This script is used to display numbers 1-100 with the following conditions:
- If the number is divisible by 3, display "Three"
- If the number is divisible by 5, display "Five"
- If the number is divisible by both 3 and 5, display "Eurofins"
- If the number is not divisible by 3 or 5, display the number itself
- The user can input custom values to display numbers between the custom values
Mateusz Judka
*/////////////////////////////////////////////////////////////////////////////

var buttonClicked = false;
var numberBackToggle = false;

// Listen for clicks on the 'Hide' button to clear the displayed numbers
document.getElementById("btnHide").addEventListener("click", function () {
    
    buttonHide();
    buttonClicked = false;
});

// Event listener for the form submission that also denies display if the custom value 1 is higher than custom value 100
document.getElementById("numbersForm").addEventListener("submit", function (event) {
    
    var customValueLower = parseInt(document.getElementById("customValue1").value, 10) || 1;
    var customValueHigher = parseInt(document.getElementById("customValue100").value, 10) || 100;

    console.log("customValueLower: " + customValueLower);
    console.log("customValueHigher: " + customValueHigher);

    if (customValueLower > customValueHigher) {
        console.log("Custom value 1 is higher than custom value 100");
        return;
    }
    buttonClicked = true;
    buttonClick();
});

// Toggles the display of actual numbers based on the checkbox state stopping the display of "Three", "Five" and "Eurofins"
document.getElementById("toggleNumberBack").addEventListener("change", function () {
    numberBackToggle = this.checked;
    
    if (buttonClicked == true) {
        buttonClick();
    }
});

// Function to hide the text container
function buttonHide() {
    document.getElementById("textContainer").innerHTML = "";
}
function buttonClick() {
    console.log("btnUseFunction clicked");
    document.getElementById("textContainer").innerHTML = ""; // Clear previous entries

    // Get the custom values from the form 1 and 100 and pharse them as integers
    var customValue1 = parseInt(document.getElementById("customValue1").value, 10) || 1;
    var customValue100 = parseInt(document.getElementById("customValue100").value, 10) || 100;
    
    for (var i = customValue1; i <= customValue100; i++) {
        var text = document.createElement("p");
        if (numberBackToggle == true) { //using == true for easier readability
            text.textContent = i;
        }
        else { 
            // If statement multiples of both 3 and 5 display “Eurofins”.
             if (i % 3 == 0 && i % 5 == 0) {
                text.textContent = "Eurofins";
                if (orangeToggle == true) {
                    text.className = "orange-background";
                }
            }
            // If statement when a number is divisable by 5 display "Five"
            else if (i % 5 == 0) {
                text.textContent = "Five";
                if (redToggle == true) {
                    text.className = "red-background";
                }
            }
            // If statement when a number is divisable by 3 display "Three"
            else if (i % 3 == 0) {
                text.textContent = "Three";
                console.log ("blue toggle is" + blueToggle);
                if (blueToggle == true) {
                    text.className = "blue-background";
                    console.log("should be blue")
                }
            }
            else if (!(i % 3 == 0 && i % 5 == 0) || !(i % 3 == 0 || i % 5 == 0)) { // If not divisable by 3 or 5 or both cover all other cases
                text.textContent = i;
            }
            else{
                console.log("how did this happen"); // Should never happen but just in case
            }
        }
        document.getElementById("textContainer").appendChild(text);
    }
}

// Variables to store the state of each toggle
var blueToggle = false;
var redToggle = false;
var orangeToggle = false;

// Function to handle the change event for any color toggle
function handleColorToggleChange(event) {
    var checkboxId = event.target.id;
    var isChecked = event.target.checked;

    switch (checkboxId) {
        case 'toggleColorBlue':
            blueToggle = isChecked;
            break;
        case 'toggleColorRed':
            redToggle = isChecked;
            break;
        case 'toggleColorOrange':
            orangeToggle = isChecked;
            break;
    }
    console.log(`${checkboxId}: ${isChecked}`);

    // If a button click state is true, invoke the buttonClick function
    if (buttonClicked === true) {
        buttonClick();
    }
}

// Attach the event listener to each checkbox
document.getElementById('toggleColorBlue').addEventListener('change', handleColorToggleChange);
document.getElementById('toggleColorRed').addEventListener('change', handleColorToggleChange);
document.getElementById('toggleColorOrange').addEventListener('change', handleColorToggleChange);
