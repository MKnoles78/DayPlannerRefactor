function myScheduleFunction() {

var table = document.getElementById("mySchedule");
var row = table.insertRow(0);
var hour = row.insertCell(0);
var note = row.insertCell(1);
var saveBtn = row.insertCell(2);

hour.innerHTML = "Time Goes Here";
note.innerHTML = "Notes Go Here";
saveBtn.innerHTML = "Button Goes Here";
}

