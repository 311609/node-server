const express = require('express');
const app = express();
const readline = require('readline-promise').default;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  return new Promise((resolve, _reject) => {
    rl.questionAsync('Indicador: ')
      .then(indicator => {
        return rl.questionAsync('Descripción: ')
          .then(description => {
            const state = 'incompleta';

            const task = {
              indicator,
              description,
              state,
            };

            tasks.push(task);
            resolve('Tarea añadida con éxito.');
          });
      });
  });
}

// Función para eliminar una tarea
function removeTask() {
  return new Promise((resolve, reject) => {
    rl.questionAsync('Índice de la tarea a eliminar: ')
      .then(index => {
        index = parseInt(index);

        if (index >= 0 && index < tasks.length) {
          tasks.splice(index, 1);
          resolve('Tarea eliminada con éxito.');
        } else {
          reject('Índice de tarea no válido.');
        }
      });
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  return new Promise((resolve, reject) => {
    rl.questionAsync('Índice de la tarea a marcar como completada: ')
      .then(index => {
        index = parseInt(index);

        if (index >= 0 && index < tasks.length) {
          tasks[index].state = 'completada';
          resolve('Tarea marcada como completada.');
        } else {
          reject('Índice de tarea no válido.');
        }
      });
  });
}

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Ruta para agregar una nueva tarea
app.post('/tasks', async (req, res) => {
  try {
    const addResult = await addTask();
    res.json({ message: addResult });
  } catch (error) {
    res.status(500).json({ error: 'Error al añadir tarea' });
  }
});

// Ruta para eliminar una tarea
app.delete('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);

  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    res.json({ message: 'Tarea eliminada con éxito.' });
  } else {
    res.status(400).json({ error: 'Índice de tarea no válido.' });
  }
});

// Ruta para marcar una tarea como completada
app.put('/tasks/:index/complete', (req, res) => {
  const index = parseInt(req.params.index);

  if (index >= 0 && index < tasks.length) {
    tasks[index].state = 'completada';
    res.json({ message: 'Tarea marcada como completada.' });
  } else {
    res.status(400).json({ error: 'Índice de tarea no válido.' });
  }
});

// Definir el host y el puerto del servidor
const host = 'localhost';
const port = 3000;

// Iniciar el servidor
app.listen(port, host, () => {
  console.log(`Servidor en ejecucion`)})
