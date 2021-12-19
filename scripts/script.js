var today = Date();
document.getElementById('currentDay').innerHTML = today;


function myScheduleFunction() {


var table = document.getElementById("mySchedule");
var row = table.insertRow(0);
var hour = row.insertCell(0);
var note = row.insertCell(1);
var saveBtn = row.insertCell(2);


row.id = 'plannerRow';
hour.id = 'hour';
hour.innerHTML = 'time';
hour.className = 'col-lg-1';
note.innerHTML = "Notes Go Here";
note.id = 'note';
note.className = 'col-lg-10';
saveBtn.innerHTML = "Button Goes Here";
saveBtn.id = 'saveBtn';
saveBtn.className = 'col-lg-1';

}

