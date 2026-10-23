function ShowAlert(){
    alert("click me button clicked using HTML  Events");
}

document.getElementById("clickButton").addEventListener("click" , ShowAlert2);


function ShowAlert2(){
    alert("button clicked by Events ");
}

document.getElementById("box").addEventListener("click" , () => {
    document.getElementById("box").innerText = "The box was clicked"
});

document.getElementById("box2").addEventListener("onmouseover" , () => {
    document.getElementById("box2").innerText = "The mouse entered in box"
});

document.getElementById("box2").addEventListener("onmouseout" , () => {
    document.getElementById("box2").innerText = "The mouse exit from box"
});

