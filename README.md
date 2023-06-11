## ¿Qué sucedió al usar async y await?

Al utilizar async y await, el programa espera a que las promesas se resuelvan antes de continuar con la ejecución. Esto permite escribir código de manera más sincrónica y secuencial, lo que hace que sea más fácil de leer y comprender. Al utilizar `await` antes de una llamada a una función que devuelve una promesa, el programa se detiene en ese punto hasta que la promesa se resuelva o se rechace.

## ¿Qué sucedió al usar el método then()?

Al utilizar el método `then()`, se pueden encadenar las llamadas a las funciones que retornan promesas. Cada `then()` se ejecuta cuando la promesa anterior se resuelve, permitiendo así realizar operaciones secuenciales. Esto proporciona un control más detallado sobre el flujo del programa y permite manejar los resultados y los errores de las promesas de manera individual.

## ¿Qué diferencias encontraste entre async, await y el método then()?

La principal diferencia entre `async/await` y el método `then()` es la forma en que se estructura el código. `async/await` permite escribir código asincrónico de manera más similar a la forma en que escribiríamos código síncrono, utilizando la palabra clave `await` para esperar a que se resuelvan las promesas. Esto hace que el código sea más legible y fácil de entender, ya que se evita el anidamiento excesivo de `then()` y callbacks.

El método `then()`, por otro lado, es más adecuado para encadenar múltiples operaciones asíncronas y manejar los resultados y los errores de forma individual. Cada `then()` se ejecuta cuando la promesa anterior se resuelve, lo que permite realizar acciones adicionales basadas en el resultado de la promesa anterior.

En resumen, `async/await` simplifica la escritura y lectura del código asincrónico, mientras que el método `then()` proporciona un mayor control y flexibilidad al encadenar múltiples operaciones asíncronas.
