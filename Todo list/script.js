document.getElementById("search").addEventListener("click", () => {
  if (document.getElementById("searchBar").value.length == 0) {
    alert("plz enter some Value and Add it");
  } else taskCreate(document.getElementById("searchBar").value);

  document.getElementById("searchBar").value = "";
});

function taskCreate(value) {
  document.getElementById("menuTask").innerHTML += `
    <div class="task">
    <div class="taskName">${value}</div>
    <button class="delete">
     delete
    </button>
    </div>`;
}
//delete a task on click delete button
setInterval(() => {
  var currentTask = document.getElementsByClassName("delete");
  for (var i = 0; i < currentTask.length; i++) {
    console.log(i);
    currentTask[i].onclick = function () {
      this.parentNode.remove();
      console.log("remove");
    };
  }
  //Completed Task........
  var completedTask = document.getElementsByClassName("taskName");
  for (var i = 0; i < completedTask.length; i++) {
    completedTask[i].onclick = function () {
      this.classList.toggle("completed");
      console.log("Completed");
    };
  }
}, 1000);
