import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card">
      <h1>Bienvenida/o 👋</h1>
      <p className="muted">SPA con React. Gestiona cursos (CRUD) desde el navegador usando localStorage.</p>
      <div className="spacer" />
      <Link className="btn" to="/cursos">Ir a Cursos</Link>
    </div>
  );
}
