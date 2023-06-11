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

// Función principal
async function main() {
  let exit = false; // Variable para controlar la salida del bucle

  console.log('\n--- Lista de Tareas ---');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Salir');

  rl.on('line', async (input) => {
    switch (input) {
      case '1':
        try {
          const addResult = await addTask();
          console.log(addResult);
        } catch (error) {
          console.error('Error al añadir tarea:', error);
        }
        break;
      case '2':
        removeTask()
          .then((removeResult) => {
            console.log(removeResult);
          })
          .catch((error) => {
            console.error('Error al eliminar tarea:', error);
          });
        break;
      case '3':
        try {
          const completeResult = await completeTask();
          console.log(completeResult);
        } catch (error) {
          console.error('Error al marcar tarea como completada:', error);
        }
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
    }
  });
}

// Ejecutar el programa principal
main();
