//Current time and day need to be displayed at the top header portion
    //Utilize a header from booStrap
    //Moment.js will need to be utilized to display the current time and date
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do YYYY"));
var timeNow = moment().format('HH');
var saveBtn = $('.saveBtn');
var taskList = $('.task-list')

var rootEl = $('#root');

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

//9AM set and get
function save9am() {
    var value9Am = input9Am.value;
    localStorage.setItem('9am', JSON.stringify(value9Am))
};

function retrieve9am() {
    input9Am.value = JSON.parse(localStorage.getItem('9am'))
};
//10AM set and get
function save10am() {
    var value10Am = input10Am.value;
    localStorage.setItem('10am', JSON.stringify(value10Am))
};

function retrieve10am() {
    input10Am.value = JSON.parse(localStorage.getItem('10am'))
};
//11AM set and get
function save11am() {
    var value11Am = input11Am.value;
    localStorage.setItem('11am', JSON.stringify(value11Am))
};

function retrieve11am() {
    input11Am.value = JSON.parse(localStorage.getItem('11am'))
};
//12PM set and get
function save12pm() {
    var value12Pm = input12Pm.value;
    localStorage.setItem('12Pm', JSON.stringify(value12Pm))
};

function retrieve12pm() {
    input12Pm.value = JSON.parse(localStorage.getItem('12Pm'))
};
//1PM set and get
function save1pm() {
    var value1Pm = input1Pm.value;
    localStorage.setItem('1Pm', JSON.stringify(value1Pm))
};

function retrieve1pm() {
    input1Pm.value = JSON.parse(localStorage.getItem('1Pm'))
};
//2PM set and get
function save2pm() {
    var value2Pm = input2Pm.value;
    localStorage.setItem('2Pm', JSON.stringify(value2Pm))
};

function retrieve2pm() {
    input2Pm.value = JSON.parse(localStorage.getItem('2Pm'))
};
//3PM set and get
function save3pm() {
    var value3Pm = input3Pm.value;
    localStorage.setItem('3Pm', JSON.stringify(value3Pm))
};

function retrieve3pm() {
    input3Pm.value = JSON.parse(localStorage.getItem('3Pm'))
};
//4PM set and get
function save4pm() {
    var value4Pm = input4Pm.value;
    localStorage.setItem('4Pm', JSON.stringify(value4Pm))
};

function retrieve4pm() {
    input4Pm.value = JSON.parse(localStorage.getItem('4Pm'))
};
//5PM set and get
function save5pm() {
    var value5Pm = input5Pm.value;
    localStorage.setItem('5Pm', JSON.stringify(value5Pm))
};

function retrieve5pm() {
    input5Pm.value = JSON.parse(localStorage.getItem('5Pm'))
};

//Save button event listeners for the buttons that correspond to their hours.
submit9Am.addEventListener('click', save9am);
submit10Am.addEventListener('click', save10am);
submit11Am.addEventListener('click', save11am);
submit12Pm.addEventListener('click', save12pm);
submit1Pm.addEventListener('click', save1pm);
submit2Pm.addEventListener('click', save2pm);
submit3Pm.addEventListener('click', save3pm);
submit4Pm.addEventListener('click', save4pm);
submit5Pm.addEventListener('click', save5pm);

//closes the retrieve functions that recalls and loads the saved data in local storage from each input on the time-blocks. Loads upon page refresh.
retrieve9am();
retrieve10am();
retrieve11am();
retrieve12pm();
retrieve1pm();
retrieve2pm();
retrieve3pm();
retrieve4pm();
retrieve5pm();

//Does not work...yet. Come back to this you dummy!!!
//Changes the color of the time-blocks depending on the time of the day based on moment.js
function updateThisShizYo() {
    for (let i = 0; i < 9; i++) {
        var time = taskList.children(i);
        console.log(time);
        
    }
};
updateThisShizYo();
/* Was not working */
// submit9Am.addEventListener("click", function(event) {
//     event.preventDefault();
//     var value9Am = input9Am.value;
//     localStorage.setItem("9AMText", JSON.stringify(value9Am));
//     console.log(value9Am);
//     renderLastItem()
// });


//Timeblocks need to change color based on past, current, and future. Grey for past, red for current, green for future.
