const KEY = 'courses';

function read() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
function write(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

export function seedIfEmpty() {
  const cur = read();
  if (cur.length === 0) {
    write([
      { id: crypto.randomUUID?.() || String(Date.now()), title: 'React Básico', instructor: 'Ada Lovelace', duration: '8h', description: 'Componentes, props y estado.' },
      { id: (crypto.randomUUID?.() || String(Date.now()+1)), title: 'React Avanzado', instructor: 'Grace Hopper', duration: '12h', description: 'Hooks, Router, contexto.' }
    ]);
  }
}

export function listCourses() {
  return read();
}

export function createCourse({ title, description, instructor, duration }) {
  const all = read();
  const id = crypto.randomUUID?.() || String(Date.now());
  all.unshift({ id, title, description, instructor, duration });
  write(all);
}

export function updateCourse(id, patch) {
  const all = read();
  const i = all.findIndex(c => c.id === id);
  if (i >= 0) { all[i] = { ...all[i], ...patch }; write(all); }
}

export function deleteCourse(id) {
  write(read().filter(c => c.id !== id));
}
