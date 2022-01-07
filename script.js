//Current time and day need to be displayed at the top header portion
    //Utilize a header from booStrap
    //Moment.js will need to be utilized to display the current time and date
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do YYYY"));

//Timeblocks need to be aligned left the task column and need to span between 9AM to 5PM
    //Timeblocks need to change color based on past, current, and future. Grey for past, red for current, green for future.


//Functions needed
    //Able to input text/value into the timeblocks
    //Save input/text value for timeblocks(Stored in localStorage?)
        //Save btn event for saving the text value into localStorage
    //When page refreshes, the saved events persist and don't reset.

