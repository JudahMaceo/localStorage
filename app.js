window.onload = function() {

    // var submitButton = document.querySelector('form div:last-child input');
    var submitButton = document.querySelector('#colorButton');
    // console.log(submitButton);
    // O: what does the submitButton variable look like onload?

    //ALL INPUT TYPE = COLOR DIVS
    var inputColors = document.querySelectorAll('input');

    // console logging array of input colors with ids and values for visual learning purposes
    var newArray = [];
    for (var i = 0; i < inputColors.length - 1; i++) {
        newArray.push(inputColors[i].id + ": " + inputColors[i].defaultValue);
    }
    console.log(newArray);

    var body = document.querySelector('body');

    var currentdate = new Date(Date.now())
    console.log(currentdate);

    var today = currentdate.getDay()
    console.log("today is a thursday: " + today);
    //IF YOU QUERY SELECTOR AN ELEMENT WITHOUT AN ID THE VALUE RETURNED IS NULL
    // document.querySelector('#today').innerText = currentdate;




    var dayColors = {};

    getDayColorsFromLocalStorage()

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        // alert("clicked on submit");
        updateDayColors();
        setBackgroundColor();
        addToLocalStorage();
        return (false);
    })

    function setBackgroundColor() {
        // set the background color to todays color
        // alert("called set colors function");
        var todaysColor = [];

        for (key in dayColors) {
            if (key === today.toString()) {
                todaysColor.push(dayColors[key])
            }

        }
        console.log(todaysColor[0]);
document.body.style.background = todaysColor[0];
    }


    function getDayColorsFromLocalStorage() {
        // check if window.localStorage.colorData is not undefined
        // JSON.parse the colorData
        // Updated the background color to todays color using the today as the key
    }

    function updateDayColors() {

        // loop through the input boxes that are type color
        // Get their values and ids
        // Add it to the dayColors object where the key is the id of each input i.e. monday's input id="1"
        for (var i = 0; i < inputColors.length - 1; i++) {
            var colorInputId = inputColors[i].id
            var newColorValue = document.getElementById(colorInputId.toString()).value;
            dayColors[colorInputId] = newColorValue;
            // dayColors[inputColors[i].id] = document.getElementById("+[i]+").value;
        }
        console.log("day colors object (next line): ");
        console.log(dayColors);

    }

    function addToLocalStorage() {
        // stringify the dayColors object
        // save it to localStorage as window.localStorage.colorData
    }

}
