import React, { useEffect, useState } from "react";

function calculateGrade(total, subjectsCount) {
  if (subjectsCount === 0) return '';
  const avg = total / subjectsCount;
  if (avg >= 90) return "A+";
  if (avg >= 80) return "A";
  if (avg >= 70) return "B";
  if (avg >= 60) return "C";
  if (avg >= 50) return "D";
  return "F";
}

export default function StudentForm({ onAdd, onUpdate, studentToEdit }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [total, setTotal] = useState(0);
  const [grade, setGrade] = useState("");

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name || "");
      setRoll(studentToEdit.roll || "");
      setPhone(studentToEdit.phone || "");
      setM1(studentToEdit.m1 ?? "");
      setM2(studentToEdit.m2 ?? "");
      setM3(studentToEdit.m3 ?? "");
    } else {
      setName(""); setRoll(""); setPhone(""); setM1(""); setM2(""); setM3("");
    }
  }, [studentToEdit]);

  useEffect(() => {
    const a = Number(m1) || 0;
    const b = Number(m2) || 0;
    const c = Number(m3) || 0;
    const tot = a + b + c;
    setTotal(tot);
    setGrade(calculateGrade(tot, 3));
  }, [m1, m2, m3]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: studentToEdit?.id,
      name: name.trim(),
      roll: roll.trim(),
      phone: phone.trim(),
      m1: Number(m1) || 0,
      m2: Number(m2) || 0,
      m3: Number(m3) || 0,
      total,
      grade
    };
    if (studentToEdit) {
      onUpdate(student);
    } else {
      onAdd(student);
    }
    // reset
    setName(""); setRoll(""); setPhone(""); setM1(""); setM2(""); setM3("");
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-row">
        <label>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} required />
      </div>

      <div className="form-row">
        <label>Roll</label>
        <input value={roll} onChange={(e)=>setRoll(e.target.value)} required />
      </div>

      <div className="form-row">
        <label>Phone</label>
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} />
      </div>

      <div className="form-row">
        <label>Marks - Subject 1</label>
        <input type="number" min="0" max="100" value={m1} onChange={(e)=>setM1(e.target.value)} />
      </div>

      <div className="form-row">
        <label>Marks - Subject 2</label>
        <input type="number" min="0" max="100" value={m2} onChange={(e)=>setM2(e.target.value)} />
      </div>

      <div className="form-row">
        <label>Marks - Subject 3</label>
        <input type="number" min="0" max="100" value={m3} onChange={(e)=>setM3(e.target.value)} />
      </div>

      <div className="form-row">
        <label>Total</label>
        <input value={total} disabled />
      </div>

      <div className="form-row">
        <label>Grade</label>
        <input value={grade} disabled />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn primary">{studentToEdit ? "Update" : "Add"} Student</button>
      </div>
    </form>
  );
}
