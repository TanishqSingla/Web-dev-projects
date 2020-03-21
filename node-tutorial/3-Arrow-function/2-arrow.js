const tasks = {
  task: [
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
    console.log("this is the function");
  }
};

console.log(tasks.getTaskToDo());
