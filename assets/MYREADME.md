# workDayScheduler

# Description
This project focuses on the use of Bootstrap and JQuery to build an application that end-users can use in order to save their tasks or to-do's for each hour of the business day from 9AM to 5PM. Once the input is collected, users are able to save this task by pressing the submit button (floppy disk icon). The information is then saved in localStorage which allows for the task to be saved even once the browser is closed.

This project also utilizes the moment().js tool to provide the accurate date in the jumbotron header. The use of moment().js is built within the task-list input area to correspond with the past, current, and future time. Previous time slots reflect a #d3d3d3 color, present time slots reflect a #ff6961 color, and future events present a #77dd77 color. An if else statement will need to be utilized for this, but I am still needing to get this to work. Otherwise, this project is functioning as expected.

# Images
![Landing page with tasks in TextArea upon page load](/workDayScheduler/assets/fullPage.JPG)

![Items stored in localStorage](/workDayScheduler/assets/inspectApplicationWindow.JPG)
# Credits
- Bootstrap Grid Layout - https://getbootstrap.com/docs/4.0/layout/grid/
- W3 localStorage - https://www.w3schools.com/js/js_api_web_storage.asp
- Log Rocket: localStorage, a Complete Guide - https://blog.logrocket.com/localstorage-javascript-complete-guide/
- Floppy Disk Emoji - https://emojipedia.org/floppy-disk/