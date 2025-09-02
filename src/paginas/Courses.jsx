import React, { useEffect, useState } from 'react';
import { listCourses, createCourse, updateCourse, deleteCourse, seedIfEmpty } from '../servicios/courseService';
import CourseCard from '../componentes/CourseCard';
import CourseForm from '../componentes/CourseForm';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null); // course o null
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    seedIfEmpty();
    setCourses(listCourses());
  }, []);

  const handleCreate = (data) => {
    createCourse(data);
    setCourses(listCourses());
    setShowForm(false);
  };

  const handleUpdate = (id, data) => {
    updateCourse(id, data);
    setCourses(listCourses());
    setEditing(null);
  };

  const handleDelete = (id) => {
    deleteCourse(id);
    setCourses(listCourses());
  };

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2>Cursos</h2>
        <button className="btn" onClick={() => { setShowForm(true); setEditing(null); }}>+ Nuevo</button>
      </div>

      {showForm && !editing && (
        <div style={{ margin: '12px 0' }}>
          <CourseForm onCancel={() => setShowForm(false)} onSave={handleCreate} />
        </div>
      )}

      <div className="grid">
        {courses.map(c => (
          <CourseCard key={c.id}
            course={c}
            onEdit={() => { setEditing(c); setShowForm(false); }}
            onDelete={() => handleDelete(c.id)}
          />
        ))}
      </div>

      {editing && (
        <div style={{ marginTop: 16 }}>
          <h3>Editar curso</h3>
          <CourseForm
            initialData={editing}
            onCancel={() => setEditing(null)}
            onSave={(data) => handleUpdate(editing.id, data)}
          />
        </div>
      )}
    </div>
  );
}
