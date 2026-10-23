function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-3");

  const TASK_INPUT = document.createElement("input");
  TASK_INPUT.type = "text";
  TASK_INPUT.value = newTask;
  TASK_INPUT.setAttribute("aria-label", "Edit task");

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();

  LI.appendChild(TASK_INPUT);
  LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);

  document.getElementById("taskInput").value = "";
}       