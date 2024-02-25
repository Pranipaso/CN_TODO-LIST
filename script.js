document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("todo-input");
  var addButton = document.getElementById("add-btn");
  var todoList = document.getElementById("todos");
  var totalTasks = document.getElementById("total-tasks");

  addButton.addEventListener("click", function () {
    var todoText = input.value.trim();
    if (todoText !== "") {
      addItemIntoList(todoText);
      input.value = "";
      updateItemCountInList();
    }
  });

  function addItemIntoList(todoText) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
    var todoItem = document.createElement("span");
    todoItem.textContent = todoText;
    todoItem.classList.add("todo-item");
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      if (checkbox.checked) {
        alert("You cannot delete a checked task");
        return;
      }
      li.style.transform = "translateX(-1000px)";
      li.style.transition = "1s ease";
      setTimeout(() => {
        todoList.removeChild(li);
        updateItemCountInList();
      }, 500);
    });
    li.appendChild(checkbox);
    li.appendChild(todoItem);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }

  function updateItemCountInList() {
    totalTasks.textContent = document.querySelectorAll("#todos li").length;
  }
});
