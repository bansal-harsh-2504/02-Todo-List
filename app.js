const input = document.querySelector("#input-box");
const button = document.querySelector("button");
const ul = document.querySelector(".list-container");
const li = document.querySelector("li");
function addTask(task){
    if(input.value == ''){
        alert("Empty task can not be added.");
    }else{
        const li = document.createElement("li");
        li.innerText = task;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        input.value = "";
        saveData();
    }
}
button.addEventListener("click", ()=>{
    addTask(input.value);
});
ul.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// The false parameter indicates that the event should be handled during the bubbling phase. This will allow events to be captured by more specific elements before reaching less specific ones.

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}
function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();