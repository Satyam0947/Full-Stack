const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAttendanceNotification");
const stopAssBtn = document.getElementById("stopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendenceNotification");
const stopPara = document.getElementById("StopNotification")

function ShowAssignment() {
    assPara.textContent = "Your assignment deadline is approaching!";
}

showAssBtn.addEventListener("click" , ShowAssignment);

showAttBtn.addEventListener("click" , () => {
    attPara.textContent = "Please check your attendance status!";
});

stopAssBtn.addEventListener("click" , () => {
    showAssBtn.removeEventListener("click" , ShowAssignment);

    stopPara.textContent = "Your assignment notification is stopped!"
});


// **********
const parent = document.getElementById("outer");
const child = document.getElementById("inner");

parent.addEventListener("click" , () => {
    console.log("Parent Clicked");
    
});

child.addEventListener("click" , () => {
    console.log("Child Clicked");
    
});


