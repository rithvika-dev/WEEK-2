// Import task management functions from task.js module
import { addTask, getAllTasks, completeTask } from "./task.js";

// Add new tasks to the list
console.log(addTask("Study", "high", "2027-01-01"));
console.log(addTask("Gym", "medium", "2026-12-01"));

// Display all tasks
console.log(getAllTasks());

// Mark task with ID 1 as complete
console.log(completeTask(1));

// Verify the updated task list
console.log(getAllTasks());
