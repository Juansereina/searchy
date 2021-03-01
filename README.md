# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

## Cuestionario

1. Por qué no debería usar la librería ​JQuery,​ ​si estoy usando ​ReactJS​?
2. ¿Porque usarias ​Hooks d​e las nuevas versiones de ​ReactJS, ​en lugar de ​class component​?
3. ¿Que es un archivo ​JSX?​
4. ¿Que diferencia hay entre una ​function ​y una ​arrow function​ de Javascript?
5. ¿Qué es ​Redux​ y​ cómo nos ayuda en los proyectos?
6. ¿Por qué usuarios pruebas unitarias en tu código?
7. ¿Que nos permite hacer la siguiente declaración?

```js
const ​anyFunction = (​param_1​) => (​param_2​) =>​ ​param_1 ​+​ ​param_2
```
## Respuestas

Estas son ideas generales que tengo sobre estos conceptos sin guiarme mucho por lo que esta estrictamente escrito en la documentación por lo que pueden haber ciertas imprecisiones.

1. JQuery es una librería pensada para facilitar el manejo del Dom entre otras cosas. React cumple la misma función y de una forma diferente ya que este último utiliza el virtual Dom mientras que jQuery el Dom por lo que no son "compatibles" porque no trabajan de la misma forma. Además, mucho de lo que hacía jQuery se puede hacer con vanilla javascript.

2. Los hooks permiten simplificar la escritura de los componentes debido a que cambia el uso de lifecycle en clases a "funciones reutilizables". Los hooks permiten compartir lógica entre componentes de manera lateral y evitar wrapper over wrapper para poder pasar propiedades o lógica entre componentes.

3. JSX es el sugar sintax que utiliza React para escribir componentes escribiendo HTML dentro de JavaScript.

4. El problema que llega a resolver el arrow function es el contexto de una función, me explico, cuando se utiliza _function_ la palabra reservada _this_ no tiene acceso al scope general, únicamente el contexto dentro de la función. Arrow function permite que _this_ tenga acceso al contexto general sin necesita de hacer uso de _.bind()_

5. Es una librería que permite crear un Store global para una aplicación y de esta forma tener un source of truth centralizado. El objetivo es poder acceder a esta información desde cualquier lugar de la app y dar respuesta dinámicas a las interacciones de la app.

6. Son el tipo de test con menor costo de mantener de la pirámide de test y ayudan a automatizar en un primer nivel muchas tareas repetitivas y reducen la probabilidad de añadir errores en una aplicación, además, de que sirven como guía para entender el funcionamiento del código ya que mientras casos de uso.

7. Es una función "curry", se ejecutaría:
```js
​anyFunction(1)(2)
// output: 3
```
Simplifica una función que recibe muchos parámetros de tal manera que una función con n parametros sea ejecutada n cantidad de veces. También, permite hacer invocaciones parciales de una función pero obteniendo un mismo resultado al final.
