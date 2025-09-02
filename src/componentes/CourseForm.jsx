import React, { useEffect, useState } from 'react';

const empty = { title: '', description: '', instructor: '', duration: '' };

export default function CourseForm({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(initialData ? { ...initialData } : empty);
  }, [initialData]);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert('Título obligatorio');
    onSave({
      title: form.title.trim(),
      description: form.description.trim(),
      instructor: form.instructor.trim(),
      duration: form.duration.trim(),
    });
  };

  return (
    <form onSubmit={submit} className="card">
      <div className="field">
        <label>Título *</label>
        <input className="input" name="title" value={form.title} onChange={onChange} placeholder="React desde cero" />
      </div>
      <div className="field">
        <label>Descripción</label>
        <textarea className="textarea" name="description" value={form.description} onChange={onChange} placeholder="Breve descripción del curso" />
      </div>
      <div className="row">
        <div className="field" style={{ flex: 1 }}>
          <label>Instructor</label>
          <input className="input" name="instructor" value={form.instructor} onChange={onChange} placeholder="Schos" />
        </div>
        <div className="field" style={{ width: 200 }}>
          <label>Duración</label>
          <input className="input" name="duration" value={form.duration} onChange={onChange} placeholder="10h" />
        </div>
      </div>
      <div className="row">
        <button type="submit" className="btn">Guardar</button>
        <button type="button" className="btn secondary" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}
