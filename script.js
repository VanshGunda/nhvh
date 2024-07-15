function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskList = document.getElementById("taskList");
    
      if (taskInput.value) {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "<a href='#' onclick='deleteTask(this)'>Delete</a>";
    li.appendChild(span);
      } else {
        alert("Please enter a task!");
      }
  taskInput.value = "";
  savedata();
}
taskList.addEventListener("click", function(e){
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    savedata();
  }
  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }

}, false);
function savedata(){
  localStorage.setItem("data", taskList.innerHTML);
}
function loaddata() {
  taskList.innerHTML = localStorage.getItem("data");
}
loaddata();