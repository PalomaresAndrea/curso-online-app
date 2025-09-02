# Curso Online App (React + Parcel)

Aplicación **SPA** con **React 18** que gestiona cursos (CRUD) persistidos en `localStorage`. Cumple la rúbrica:
- SPA con React ✅
- CRUD (Agregar, Ver/Listar, Editar, Eliminar) ✅
- Git + GitHub con ramas y PRs ✅
- GitHub Projects (Kanban) con Issues por funcionalidad ✅
- GitHub Actions (build en Push/PR) ✅
- Estructura de carpetas alineada a la especificación ✅
- Despliegue opcional (Netlify/Vercel) ✅

## Requisitos / Cómo correr
- Node 18+ (recomendado 20).
- Linux (nativo) o Windows con WSL2.
```bash
npm install
npm run dev
# build de producción (lo que valida CI)
npm run build
Estructura de la app
/public
/src
  /componentes
    CourseCard.jsx
    CourseForm.jsx
  /paginas
    Home.jsx
    Courses.jsx
  /servicios
    courseService.js
App.js
index.js
.github/workflows/ci.yml
package.json
README.md

Funcionalidad (CRUD)

Crear: botón “+ Nuevo” → formulario → guarda en localStorage.

Listar: grid de tarjetas (título, instructor, duración, descripción).

Editar: botón “Editar” → formulario precargado → guarda cambios.

Eliminar: botón “Eliminar” → remueve del almacenamiento.

Flujo de versionado (Git Workflow)

main: rama estable (release).

desarrollo: integración (merge de features).

feature/*: por funcionalidad (p. ej. feature/agregar-cursos, feature/estilos-latte).

PRs: feature/* → desarrollo → main.

Convención de commits: feat:, fix:, docs:, style:, chore:, refactor:.

GitHub Projects (Kanban)

Columnas: Por Hacer · En Proceso · En Revisión (PRs) · Hecho
Issues sugeridas: Crear Curso · Editar Curso · Eliminar Curso · Listar Cursos
Vincular PRs a Issues con Closes #N para automatizar estados.

GitHub Actions (CI)

Workflow en .github/workflows/ci.yml:

Dispara en push/PR a main y desarrollo.

Pasos: Checkout → Setup Node → npm install → npm run build.

Notas Linux/Windows

Importante case-sensitive en imports (Button.jsx ≠ button.jsx en Linux).

Saltos de línea LF controlados con .gitattributes.

localStorage usado para persistencia (no requiere backend).

Despliegue (opcional)
Netlify (drag & drop)

npm run build → carpeta dist/

Dentro de dist/, archivo _redirects:

/* /index.html 200


En Netlify → Add new site → Deploy manually → arrastra dist/.

Vercel (conectado a GitHub)

Build: npm run build

Output: dist

vercel.json (opcional) para fallback SPA:

{ "rewrites": [ { "source": "/(.*)", "destination": "/index.html" } ] }


5) Pulsa **Mark as resolved**.  
6) Luego **Commit merge** (GitHub creará un commit de “Merge conflict resolved”).  
7) Espera a que los **Checks/CI** queden en ✅.  
8) Clic **Merge pull request** → **Confirm merge**.

> El “Deploy Preview” de Netlify que ves arriba del PR es normal: es una vista previa del PR. Tras el merge a `main`, si usas el deploy manual, vuelve a subir `dist/` como siempre.

---

## 🧰 Opción por consola (si prefieres local)
```bash
# 1) Actualiza todo
git fetch origin
git checkout main
git pull
git checkout desarrollo
git pull

# 2) Crea rama temporal para fusionar
git checkout -b merge/desarrollo-a-main

# 3) Intenta mezclar desarrollo
git merge --no-ff origin/desarrollo
# quedará en conflicto README.md

# 4) Abre README.md y resuelve (pega el README final de arriba)
# quita los marcadores <<<<<<< ======= >>>>>> y deja solo el contenido final

git add README.md
git commit -m "docs: resolver conflicto de README.md en merge desarrollo→main"
git push -u origin merge/desarrollo-a-main

# 5) Abre PR en GitHub: base main ← compare merge/desarrollo-a-main
#    Espera CI → Merge