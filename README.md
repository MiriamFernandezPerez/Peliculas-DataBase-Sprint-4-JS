# 🎬 Películas DataBase (Sprint 4)

> **Proyecto:** Sprint 4 - IT Academy / Procesamiento de datos de películas en JavaScript

---

## 🔎 Descripción

Este repositorio contiene la **lógica** (backend/no-UI) para un ejercicio formativo de la IT Academy: un conjunto de funciones en JavaScript para **procesar**, **filtrar** y **ordenar** una base de datos de películas (250 elementos). El objetivo principal es practicar **programación funcional** usando métodos de arrays ES6 (`map`, `filter`, `reduce`, `sort`) y aplicar principios de **inmutabilidad** y **pureza**.

> Nota: la interfaz (`src/index.html`) está únicamente como marcador; las pruebas validan la lógica sin necesidad de una UI.

---

## ✅ Objetivos del proyecto

* Implementar 8 funciones puras que operan sobre el array de películas.
* Usar exclusivamente métodos de arrays ES6 (no `for`, `while` ni `forEach`).
* Mantener inmutabilidad: **no mutar** los arrays/objetos de entrada.
* Pasar todas las pruebas unitarias (Jest) y generar el informe HTML de resultados.

---

## 📁 Estructura del repositorio

```
├── src/
│   ├── data.js        # dataset estático (250 películas)
│   └── films.js       # implementaciones a completar
├── tests/
│   └── films.spec.js  # especificaciones (tests) — fuente de requisitos
├── package.json       # scripts & configuraciones de test (Jest + reportes)
└── README.md
```

---

## 🛠️ Funciones a implementar (resumen)

Cada función debe ser pura, inmutable y usar métodos de arrays.

1. **getAllDirectors(movies)** → `Array<string>`

   * Extrae y devuelve todos los directores (map).

2. **getMoviesFromDirector(movies, director)** → `Array<Movie>`

   * Filtra las películas por director (filter).

3. **moviesAverageOfDirector(movies, director)** → `number`

   * Media de `score` de un director (filter + reduce). Debe devolver `number` con 2 decimales.

4. **orderAlphabetically(movies)** → `Array<string>`

   * Devuelve los primeros 20 títulos ordenados alfabéticamente (sort + slice) sin mutar.

5. **orderByYear(movies)** → `Array<Movie>`

   * Ordena por año ascendente; en caso de empate, por título (sort).

6. **moviesAverageByCategory(movies, genre)** → `number`

   * Media de `score` por categoría/género (filter + reduce). Resultado con 2 decimales.

7. **hoursToMinutes(movies)** → `Array<Movie>`

   * Convierte `duration` como "2h 22min" → `144` minutos. Devuelve nuevo array transformado (map).

8. **bestFilmOfYear(movies, year)** → `Array<Movie>`

   * Devuelve la(s) película(s) mejor puntuadas de un año dado (filter + reduce / find max).

---

## ⚠️ Reglas y restricciones importantes

* ✅ **Obligatorio:** usar `map`, `filter`, `reduce`, `sort` (no bucles tradicionales ni `forEach`).
* ✅ **Inmutabilidad:** nunca mutar los arrays u objetos de entrada; devolver siempre nuevas estructuras.
* ✅ **Precisión numérica:** las medias deben redondearse a **2 decimales** (p. ej. `6.50`).
* ✅ **Tipos:** las funciones que devuelven números deben devolver un `number` (no strings).

---

## 🧪 Tests y reporte

* Instala dependencias y ejecuta los tests con:

```bash
npm install
npm run test
# o para ver el reporter HTML en caliente
npm run test:watch
```

* El proyecto usa `jest` para las pruebas y un reportero HTML (configurado en `package.json`) que genera un archivo tipo `test-results.html` o `resultados-de-la-prueba.html`. Abre ese HTML con Live Server o en tu navegador para capturar una **pantalla** que muestre todas las pruebas aprobadas (esto es requerido por el campus virtual para la entrega).

---

## 📸 Entrega / Evaluación

1. Implementa todas las funciones en `src/films.js` siguiendo los tests en `tests/films.spec.js`.
2. `git add . && git commit -m "Sprint Solution" && git push origin main`
3. Crea **Pull Request** en GitHub.
4. Sube al Campus Virtual:

   * Enlace al PR
   * Captura de pantalla del informe HTML con todas las pruebas pasadas

---

## 🧭 Buenas prácticas y consejos

* Escribe funciones pequeñas y legibles; aprovecha el encadenado (`movies.filter(...).map(...).reduce(...)`).
* Para la conversión de tiempo, maneja casos donde falte `h` o `min` (p. ej. "2h", "34min").
* Para redondeo a 2 decimales: usa `Math.round(valor * 100) / 100` o `Number(valor.toFixed(2))`.
* Añade `console.log` solo para debug; el reportero HTML puede capturar `console.log` si está configurado.

---

## 🏷️ Licencia y créditos

Proyecto formativo (IT Academy).

---

