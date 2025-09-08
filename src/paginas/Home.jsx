import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card">
      <h1>Bienvenida/o a Cursos Online👋</h1>
      <p className="muted">Hola bien benidos a los cursos de programación con los mejores maestros</p>
      <div className="spacer" />
      <Link className="btn" to="/cursos">Ir a Cursos</Link>
    </div>
  );
}
