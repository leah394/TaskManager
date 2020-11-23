// Task Manager

const menu = `TASK MANAGER / What would you like to do: / "NEW" - Add A New Task / "TASKS" - Display All Tasks / "REMOVE" - Remove A Tasks / "CLOSE" - Close The Task Manager`;

const tasks = [`Charge MacBook`, `Master JavaScript`];

let showTasks = "";

let newTask;

let num;

let removed;

let userInput = prompt(menu);

while (userInput !== "CLOSE"){
    if (userInput === "TASKS"){
          for (task of tasks){
         showTasks = showTasks + `${task}/`
        }
        alert(showTasks);
        showTasks = "";
    } else if (userInput === "NEW"){
       newTask = prompt(`Please enter the new task:`);
       alert(`${newTask} has been added!`);
       tasks.push(newTask); 
    } else if (userInput === "REMOVE"){
        for (i = 0; i < tasks.length; i++){
            showTasks = showTasks + `${i}: ${tasks[i]}/`;
        }
        num  = prompt(`Please enter a number to remove: ${showTasks}`);
        removed = tasks.splice(num, 1);
        alert(`${removed} has been removed`);
        showTasks = "";
    }
    userInput = prompt(menu);
}
alert(`Thank you for using Task Manager!`);