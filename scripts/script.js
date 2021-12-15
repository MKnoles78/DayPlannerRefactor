function myScheduleFunction() {

var table = document.getElementById("mySchedule");
var row = table.insertRow(0);
var hour = row.insertCell(0);
var note = row.insertCell(1);
var saveBtn = row.insertCell(2);

hour.innerHTML = "Time Goes Here";
hour.id = 'hour';
note.innerHTML = "Notes Go Here";
note.id = 'notes';
saveBtn.innerHTML = "Button Goes Here";
saveBtn.id = 'saveBtn';
}

