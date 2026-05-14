import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

let tasks = [];
let id = 1;

export function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid priority";
  if (!validateDueDate(dueDate)) return "Invalid date";

  tasks.push({ id: id++, title, priority, dueDate, completed: false });
  return "Task added";
}

export function getAllTasks() {
  return tasks;
}

export function completeTask(taskId) {
  let task = tasks.find(t => t.id === taskId);
  if (!task) return "Not found";
  task.completed = true;
  return "Completed";
}
