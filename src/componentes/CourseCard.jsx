import React from 'react';

export default function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{course.title}</h3>
      <p className="muted">Instructor: <strong>{course.instructor}</strong> — Duración: {course.duration}</p>
      {course.description && <p style={{ whiteSpace: 'pre-wrap' }}>{course.description}</p>}
      <div className="row">
        <button className="btn secondary" onClick={onEdit}>Editar</button>
        <button className="btn danger" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
}
