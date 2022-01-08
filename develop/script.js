//Current time and day need to be displayed at the top header portion
    //Utilize a header from booStrap
    //Moment.js will need to be utilized to display the current time and date
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do YYYY"));

//Save btn event for saving the text value into localStorage
var submit9Am = document.getElementById("submit9AM");
var submit10Am = document.getElementById("submit10AM");
var submit11Am = document.getElementById("submit11AM");
var submit12Pm = document.getElementById("submit12PM");
var submit1Pm = document.getElementById("submit1PM");
var submit2Pm = document.getElementById("submit2PM");
var submit3Pm = document.getElementById("submit3PM");
var submit4Pm = document.getElementById("submit4PM");
var submit5Pm = document.getElementById("submit5PM");

//Input fields for time-block
var input9Am = document.getElementById("9AMText");
var input10Am = document.getElementById("10AMText");
var input11Am = document.getElementById("11AMText");
var input12Pm = document.getElementById("12PMText");
var input1Pm = document.getElementById("1PMText");
var input2Pm = document.getElementById("2PMText");
var input3Pm = document.getElementById("3PMText");
var input4Pm = document.getElementById("4PMText");
var input5Pm = document.getElementById("5PMText");

function renderLastItem() {
    var godDammit = localStorage.getItem("9AMText");
    input9Am.textContent = godDammit;
};

submit9Am.addEventListener("click", function(event) {
    event.preventDefault();
    var value9Am = input9Am.value;
    localStorage.setItem("9AMText", value9Am);
    console.log(value9Am);
    renderLastItem()
});

// function timeTracker() {
//     //get current number of hours.
//     var timeNow = moment().hour();

//     // loop over time blocks
//     $(".time-block").each(function () {
//         var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//         // To check the time and add the classes for background indicators
//         if (blockTime < timeNow) {
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//             $(this).addClass("past");
//         }
//         else if (blockTime === timeNow) {
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");

//         }
//     })
// }
// timeTracker();





//Timeblocks need to change color based on past, current, and future. Grey for past, red for current, green for future.


//Functions needed
    //Save input/text value for timeblocks(Stored in localStorage?)
    //When page refreshes, the saved events persist and don't reset