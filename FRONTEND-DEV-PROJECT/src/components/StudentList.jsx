import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function StudentList({ students, onSelect, onDelete, onEdit }) {
  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Phone</th>
            <th>Total</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr><td colSpan="6" className="muted">No students. Click "Load Students" or add one.</td></tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.roll}</td>
                <td>{s.phone || '-'}</td>
                <td>{s.total ?? '-'}</td>
                <td>{s.grade ?? '-'}</td>
                <td className="actions">
                  <button className="btn action-btn view-btn" onClick={() => onSelect(s)} title="View">
                    <FaEye className="icon-sm" />
                  </button>
                  <button className="btn action-btn edit-btn" onClick={() => onEdit(s)} title="Edit">
                    <FaEdit className="icon-sm" />
                  </button>
                  <button className="btn action-btn delete-btn" onClick={() => onDelete(s.id)} title="Delete">
                    <FaTrash className="icon-sm" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
