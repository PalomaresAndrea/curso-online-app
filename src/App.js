import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Courses from './paginas/Courses';
import logo from '../public/logo.svg';
export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="brand">
          <img src={logo} width="22" height="22" alt="logo"/>
          <img src="/public/logo.svg" width="22" height="22" alt="logo"/>
          <span>Curso Online App</span>
        </div>
        <Link to="/">Inicio</Link>
        <Link to="/cursos">Cursos</Link>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
        </Routes>
      </main>
    </>
  );
}
