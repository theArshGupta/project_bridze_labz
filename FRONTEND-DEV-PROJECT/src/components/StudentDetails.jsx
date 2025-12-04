import React from "react";

export default function StudentDetails({ student }) {
  if (!student) return null;
  return (
    <div className="student-details">
      <h2>{student.name}</h2>
      <div className="details-grid">
        <div><strong>Roll:</strong> {student.roll}</div>
        <div><strong>Phone:</strong> {student.phone || '-'}</div>
        <div><strong>Marks:</strong></div>
        <div className="marks">
          <div>Subject 1: {student.m1 ?? '-'}</div>
          <div>Subject 2: {student.m2 ?? '-'}</div>
          <div>Subject 3: {student.m3 ?? '-'}</div>
        </div>
        <div><strong>Total:</strong> {student.total ?? '-'}</div>
        <div><strong>Grade:</strong> {student.grade ?? '-'}</div>
      </div>
    </div>
  );
}
