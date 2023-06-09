const readline = require('readline-sync');

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  const indicator = readline.question('Indicador: ');
  const description = readline.question('Descripción: ');
  const state = 'incompleta';

  const task = {
    indicator,
    description,
    state
  };

  tasks.push(task);
  console.log('Tarea añadida con éxito.');
}

// Función para eliminar una tarea
function removeTask() {
  const index = readline.question('Índice de la tarea a eliminar: ');
  
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada con éxito.');
  } else {
    console.log('Índice de tarea no válido.');
  }
}

// Función para marcar una tarea como completada
function completeTask() {
  const index = readline.question('Índice de la tarea a marcar como completada: ');
  
  if (index >= 0 && index < tasks.length) {
    tasks[index].state = 'completada';
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Índice de tarea no válido.');
  }
}

// Función principal
function main() {
  while (true) {
    console.log('\n--- Lista de Tareas ---');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Salir');

    const option = readline.question('Elige una opción: ');

    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        removeTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        return; // Salir del programa
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
    }
  }
}

// Ejecutar el programa principal
main();
