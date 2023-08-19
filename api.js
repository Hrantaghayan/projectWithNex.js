const baseUrl = "http://localhost:4000";

export async function getAllTodos() {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const items = await res.json();
  return items;
}
export async function addTodo(newItem) {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  const newTodo = await res.json();
  return newTodo;
}

export async function editToDo(newItem) {
  const res = await fetch(`${baseUrl}/tasks/${newItem?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  const newTodo = await res.json();
  return newTodo;
}
export async function deleteToDo(id) {
  const res = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
}
export async function updateAction (newItem) {
  const res = await fetch(`${baseUrl}/tasks/${newItem?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
}
