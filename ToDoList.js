document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');
  
    let tasks = [];
  
    // Function to add a new task
    const addTask = () => {
      const taskText = newTaskInput.value.trim();
      if (taskText === '') return;
  
      const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleString(),
        completedAt: null,
      };
  
      tasks.push(task);
      newTaskInput.value = '';
      renderTasks();
    };
  
    // Function to render tasks to the UI
    const renderTasks = () => {
      pendingTasksList.innerHTML = '';
      completedTasksList.innerHTML = '';
  
      tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
  
        const taskText = document.createElement('span');
        taskText.textContent = `${task.text} (Added on: ${task.createdAt})`;
        if (task.completed) {
          taskText.classList.add('completed');
        }
  
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(task.id));
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(task.id));
  
        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => toggleComplete(task.id));
  
        taskItem.append(taskText, editButton, deleteButton, completeButton);
  
        if (task.completed) {
          taskText.textContent += ` (Completed on: ${task.completedAt})`;
          completedTasksList.appendChild(taskItem);
        } else {
          pendingTasksList.appendChild(taskItem);
        }
      });
    };
  
    // Function to edit a task
    const editTask = (id) => {
      const task = tasks.find(task => task.id === id);
      const newText = prompt('Edit Task:', task.text);
      if (newText) {
        task.text = newText;
        renderTasks();
      }
    };
  
    // Function to delete a task
    const deleteTask = (id) => {
      tasks = tasks.filter(task => task.id !== id);
      renderTasks();
    };
  
    // Function to mark a task as complete/incomplete
    const toggleComplete = (id) => {
      const task = tasks.find(task => task.id === id);
      task.completed = !task.completed;
      task.completedAt = task.completed ? new Date().toLocaleString() : null;
      renderTasks();
    };
  
    // Event listener for adding a task
    addTaskButton.addEventListener('click', addTask);
  
    // Allow pressing Enter to add a task
    newTaskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addTask();
    });
  
    // Initial render
    renderTasks();
  });
  