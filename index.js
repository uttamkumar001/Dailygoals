const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
//form does not get submitted
listAllTasks();
function listAllTasks() {
  for (let i = 0; i < tasks.length; i = i + 1) {
    let value = tasks[i];
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    const innerdiv = document.createElement("div");
    div.append(innerdiv);
    const p = document.createElement("p");
    p.innerText = value.title;
    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(p);
    innerdiv.append(span);
    const button = document.createElement("button");
    button.innerText = "-";
    button.addEventListener("click", () => {
      removeTasks();
      tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      listAllTasks();
    });
    button.setAttribute("class", "delBtn");
    div.append(button);
    container.append(div);
  }
}
function removeTasks() {
  for (let value of tasks) {
    const div = document.querySelector(".task");
    div.remove();
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value
  });
  // console.log(tasks[tasks.length - 1]);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  listAllTasks();
});
