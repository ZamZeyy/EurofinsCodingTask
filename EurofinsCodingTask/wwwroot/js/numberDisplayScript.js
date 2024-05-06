// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.





//display 1-100

var buttonClicked = false;
var numberBackToggle = false;
/*
document.getElementById("btnUseFunction").addEventListener("click", function () {
    buttonClicked = true;
    buttonClick();
    
});
*/

document.getElementById("btnHide").addEventListener("click", function () {
    
    buttonHide();
    buttonClicked = false;
});

document.getElementById("numbersForm").addEventListener("submit", function (event) {
    
    var customValueLower = document.getElementById("customValue1").value || 1;
    var customValueHigher = document.getElementById("customValue100").value || 100;

    if (customValueLower > customValueHigher) {
        return;
    }
    buttonClicked = true;
    buttonClick();
  
});

/*
document.getElementById("numbersForm").addEventListener("submit", function (event) {
    $(function () {
        // This replaces both the document ready and the native JS event listener setup
        $('#numbersForm').on('submit', function (event) {
            event.preventDefault();  // Prevent the form from submitting via the browser.

            var formData = $(this).serialize(); // Serialize the form data.

            $.ajax({
                type: 'POST',
                url: '/Home/SaveNumbers',
                data: formData,
                success: function (response) {
                    alert('Numbers saved successfully!');
                    
                    
                },
                error: function () {
                    alert('Error saving numbers.');
                    // Handle error
                }
            });
        });

        buttonClicked = true; // Ensure 'buttonClicked' is declared in a scope accessible to where it's needed.
        buttonClick(); // Ensure the 'buttonClick' function is defined or available in the scope
            
            
        
    });

});
*/

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

    // Get the custom values from the form 1 and 100 by default
    var customValue1 = document.getElementById("customValue1").value || 1;
    var customValue100 = document.getElementById("customValue100").value || 100;
    
    

    for (var i = customValue1; i <= customValue100; i++) {
        var text = document.createElement("p");
        if (numberBackToggle == true) { //using == true for easier readability
            text.textContent = i;
        }
        else { 

            
            //if statement multiples of both 3 and 5 display “Eurofins”.
             if (i % 3 == 0 && i % 5 == 0) {
                text.textContent = "Eurofins";
                if (orangeToggle == true) {
                    text.className = "orange-background";
                }

            }
            //if statement when a number is divisable by 5 display "Five"
            else if (i % 5 == 0) {
                text.textContent = "Five";
                if (redToggle == true) {
                    text.className = "red-background";
                }

            }
            //if statement when a number is divisable by 3 display "Three"
            else if (i % 3 == 0) {
                text.textContent = "Three";
                console.log ("blue toggle is" + blueToggle);
                if (blueToggle == true) {
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



