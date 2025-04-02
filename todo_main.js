const fileSystem = require("fs");
const filePath = "./assets/tasks.json";

// list of arguments passed into command line while executing
const command = process.argv[2];
const argument = process.argv[3];

/* Method declarations */
const loadTasks = () => {
  try {
    const dataBuffer = fileSystem.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fileSystem.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  let count = tasks.length;
  tasks.push({ taskID: count, taskDescription: task });
  saveTasks(tasks);
};

const listTasks = () =>
  loadTasks().forEach((task, index) =>
    console.log(`${task.taskID} -- ${task.taskDescription}`)
  );

const removeTask = (searchString) => {
  const tasks = loadTasks();
  const count = tasks.length;    
  const updated = tasks.filter(task => task.taskDescription !== searchString);
  if (updated.length < count) {
    saveTasks(updated);
    console.log("Removed successfully !");
  } else console.log("Match could not be found !");
};

/* commands and operations */
if (command == "add") addTask(argument);
else if (command == "list") listTasks();
else if (command == "remove") removeTask(argument);
else console.log("Command not found !");