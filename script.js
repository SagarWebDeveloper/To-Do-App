const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className ="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg hover:shadow transition";
    li.innerHTML = `<span class="flex-1 ${task.completed ? "line-through text-gray-500" : ""}">${task.text}</span>
      <div class="flex gap-2">
        <button onclick="toggleTask(${index})" class="text-green-600">✔</button>
        <button onclick="deleteTask(${index})" class="text-red-600">✖</button>
      </div>`;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Please enter a task");

  tasks.push({ text, completed: false });
  taskInput.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();

