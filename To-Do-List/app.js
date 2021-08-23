function addTask() {
    const task = document.querySelector("form input");
    const list = document.querySelector("ul");
    if (task.value === "") {
      alert("Please add a new task");
      return;
    }
    const li = document.createElement("li");
    li.innerHTML = `<span>${task.value}</span>
                    <i class="far fa-window-close" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
    task.value = "";
  }
  
  
  function removeTask(event) {
    event.parentElement.remove();
  }