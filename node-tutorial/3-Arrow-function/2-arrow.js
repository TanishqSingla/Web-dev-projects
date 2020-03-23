const tasks = {
  tasks: [
    {
      text: "Grocery Shopping",
      completed: true
    },
    {
      text: "Clean yard",
      completed: false
    },
    {
      text: "Film Course",
      completed: false
    }
  ],
  getTaskToDo() {
    return this.tasks.filter(task => task.completed === false);
  }
};

console.log(tasks.getTaskToDo());
