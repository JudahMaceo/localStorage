//BECAUSE JS TAG COMES BEFORE CSS TAG IN HTML?
  //IS THIS NECESSARY OTHERWISE?
window.onload = function(){

// SUBMIT BUTTON IS LAST CHILD OF THE FORM DIV
  // var submitButton = document.querySelector('form div:last-child input');
  var submitButton = document.querySelector('#colorButton');
console.log(submitButton);
// O: what does the submitButton variable look like onload?

// INPUT REFERS TO DIV BOXES FOR EACH DAY OF WEEK
  var inputColors = document.querySelectorAll('input');
  console.log(inputColors);
// O: onload what does the inputColors variable look like? I'm assuming an array?

//BODY REFERS TO BODY OF DOCUMENT
  var body = document.querySelector('body');


//CURRENT DATE TAKES THE VALUE OF THE NEW DATE OBJECT (WHICH CONTAINS THE DATE NOW)
  var currentdate = new Date(Date.now())
  console.log(currentdate);
//GET DAY RETURNS THE DAY OF THE WEEK (0 FOR SUNDAY, 1 FOR MONDAY ETC.)
  var today = currentdate.getDay()
  console.log(today);
//IF YOU QUERY SELECTOR AN ELEMENT WITHOUT AN ID THE VALUE RETURNED IS NULL
  // document.querySelector('#today').innerText = currentdate;

  var dayColors = {};

  getDayColorsFromLocalStorage()

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    // alert("clicked on submit");
    // updateDayColors();
    setColors();
    // addToLocalStorage();
    return(false);
  })

  function setColors(){
    // set the background color to todays color
  // alert("called set colors function");
document.body.style.background = "red";
  }


  function getDayColorsFromLocalStorage(){
    // check if window.localStorage.colorData is not undefined
    // JSON.parse the colorData
    // Updated the background color to todays color using the today as the key
  }

  function updateDayColors(){
    // loop through the input boxes that are type color
    // Get their values and ids
    // Add it to the dayColors object where the key is the id of each input i.e. monday's input id="1"
  }

  function addToLocalStorage(){
    // stringify the dayColors object
    // save it to localStorage as window.localStorage.colorData
  }

}
