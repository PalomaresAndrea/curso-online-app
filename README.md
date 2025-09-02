# Curso Online App (React + Parcel)
SPA con React 18, Router y CRUD de cursos (localStorage). Pensado para Linux; si desarrollas en Windows usa WSL2 o configura LF (ver .gitattributes).

## Scripts
- `npm run dev` — servidor de desarrollo en http://localhost:5173
- `npm run build` — genera `/dist`

## Estructura
- `src/componentes` — UI (CourseCard, CourseForm)
- `src/paginas` — vistas (Home, Courses)
- `src/servicios` — lógica CRUD (localStorage)

## Flujo Git
- `main` (producción), `desarrollo` (integración)
- Ramas `feature/*` (p. ej. `feature/editar-cursos`)
- PR: de `feature/*` → `desarrollo` → `main`
- GitHub Actions ejecuta build en Push/PR a `main` y `desarrollo`

## GitHub Projects (Kanban)
Columnas: Por Hacer | En Proceso | En Revisión (PRs) | Hecho
Issues sugeridas: Crear Curso, Editar Curso, Eliminar Curso, Listar Cursos.

## Despliegue (opcional)
Puedes usar Netlify/Vercel; sirve `dist` como sitio estático.

## Guía rápida: Crear Curso
- En la página **Cursos**, presiona **+ Nuevo**.
- Completa el formulario (título obligatorio) y guarda.
- Se persiste en **localStorage**.
