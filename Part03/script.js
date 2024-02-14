function openPopup() {
    document.getElementById('addTaskPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('addTaskPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('taskInput').value = '';
  }

  function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.className = 'task';
      newTask.innerHTML = `
        <span>${taskInput}</span>
        <div>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
      taskList.appendChild(newTask);
      closePopup();
    }
  }


  function deleteTask(button) {
    if (confirm('Are you sure to delete this record ?')) {
        const task = button.parentNode.parentNode;
        task.parentNode.removeChild(task);
    }
  }


