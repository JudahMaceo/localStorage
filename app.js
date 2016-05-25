//BECAUSE JS TAG COMES BEFORE CSS TAG IN HTML?
  //IS THIS NECESSARY OTHERWISE?
window.onload = function(){

// SUBMIT BUTTON IS LAST CHILD OF THE FORM DIV
  var submitButton = document.querySelector('form div:last-child input');

// INPUT REFERS TO DIV BOXES FOR EACH DAY OF WEEK
  var inputColors = document.querySelectorAll('input');

//BODY REFERS TO BODY OF DOCUMENT
  var body = document.querySelector('body');

  // returns day of the week, with 0 being Sunday, 1 being Monday, 2 being Tuesday, etc
//HOW DOES THIS WORK???
  //WHERE IS NEW DATE FUNCTION?
    //WHERE IS DATE OBJECT?
      //WHERE IS NOW FUNCTION?
        //WHERE IS GET DAY FUNCTION?
          //WHERE IS CURRENT DATE OBJECT?
  var currentdate = new Date(Date.now())
  var today = currentdate.getDay()
  document.querySelector('#today').innerText = currentdate;

  var dayColors = {};

  getDayColorsFromLocalStorage()

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    updateDayColors();
    setColors();
    addToLocalStorage();
  })

  function setColors(){
    // set the background color to todays color
body.style.background = "red";
  }

setColors();

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
