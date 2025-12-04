const API = "http://localhost:4000/students";

// GET ALL STUDENTS
export async function getStudents() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch students");
  return res.json();
}

// ADD STUDENT
export async function addStudent(student) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
  if (!res.ok) throw new Error("Failed to add student");
  return res.json();
}

// UPDATE STUDENT
export async function updateStudent(id, updatedStudent) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedStudent)
  });
  if (!res.ok) throw new Error("Failed to update student");
  return res.json();
}

// DELETE STUDENT
export async function deleteStudent(id) {
  const res = await fetch(`${API}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete student");
  return true;
}

// GET ONE STUDENT
export async function getStudentById(id) {
  const res = await fetch(`${API}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch student");
  return res.json();
}
