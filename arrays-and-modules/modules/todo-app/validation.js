export function validateTitle(title) {
  return title && title.length >= 3;
}

export function validatePriority(priority) {
  return ["low", "medium", "high"].includes(priority);
}

export function validateDueDate(date) {
  return new Date(date) > new Date();
}
