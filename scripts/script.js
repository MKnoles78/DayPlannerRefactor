var today = Date();
document.getElementById('currentDay').innerHTML = today;
const noteArea = document.createElement("textarea");
const t = document.createTextNode("Notes go here now");
noteArea.appendChild(t);
document.body.appendChild(noteArea);
const timeArea = document.createElement("div");
const time = document.createTextNode("9 AM");
timeArea.appendChild(noteArea);



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

for (let i = 0; i <= 12; i++) {
    myScheduleFunction()
    
}

