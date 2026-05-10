function addTask() {
  let taskInput = document.querySelector("#taskInput");
  let taskList = document.querySelector("#taskList");

  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = function() {
    li.classList.toggle("done");
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}