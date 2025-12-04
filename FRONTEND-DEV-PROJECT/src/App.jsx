import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";
import "./styles.css";
import { FaDownload } from "react-icons/fa";

export default function App() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editStudent, setEditStudent] = useState(null);

  // LOAD STUDENTS (dummy data for frontend-only)
  const loadStudents = () => {
    const dummyData = [
      { id: 1, name: "John Doe", age: 20, grade: "A" },
      { id: 2, name: "Alice Smith", age: 21, grade: "B" },
    ];
    setStudents(dummyData);
  };

  // ADD STUDENT
  const addStudent = (s) => {
    const studentWithId = { ...s, id: Date.now() };
    setStudents((prev) => [...prev, studentWithId]);
  };

  // UPDATE STUDENT
  const updateStudent = (s) => {
    setStudents((prev) => prev.map(st => (st.id === s.id ? s : st)));
    setEditStudent(null);
    if (selected?.id === s.id) setSelected(s);
  };

  // DELETE STUDENT
  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter(st => st.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div className="app-container">
      <h1 className="title">Student Result Dashboard</h1>

      <div className="layout">
        <div className="left-panel">
          <div className="left-top card">
            {selected ? (
              <StudentDetails student={selected} />
            ) : (
              <div className="empty">Select a student to view details.</div>
            )}
          </div>

          <div className="left-bottom card">
            <h2 className="section-title">Add / Edit Student</h2>
            <StudentForm
              onAdd={addStudent}
              onUpdate={updateStudent}
              studentToEdit={editStudent}
            />
          </div>
        </div>

        <div className="right-panel card">
          <div className="panel-top">
            <button className="btn load-btn" onClick={loadStudents}>
              <FaDownload className="icon-sm" /> Load Students
            </button>
            <div className="spacer" />
            <div className="note">Right: Student list. Left: Details & form.</div>
          </div>
          <StudentList
            students={students}
            onSelect={(s) => setSelected(s)}
            onDelete={deleteStudent}
            onEdit={(s) => setEditStudent(s)}
          />
        </div>
      </div>
    </div>
  );
}
