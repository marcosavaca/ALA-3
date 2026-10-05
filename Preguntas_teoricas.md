### Js acotado a objetos basado en prototipos: analisis segun los cuatro componentes de un paradigma de Kuhn

## 1. Generalizaciones simbolicas
Reglas formales y la sintaxis del lenguaje, acotadas a POO basado en prototipos:

- Todo se modela con objetos.
- Cada objeto tiene un prototipo: Object.getPrototypeOf(obj)
- Crear un objeto a partir de otro: Object.create(prototipo) crea un objeto nuevo cuyo prototipo es el objeto indicado.
- Funciones constructoras y new: una funcion se usa como molde de objetos. Y se indica con objeto.prototype.metodo los metodos del prototipo que podran acceder los otros objetos.
- Ejemplo:
  function Tarea(titulo) {
      this.titulo = titulo;
  }
  Tarea.prototype.mostrar = function () {
      console.log(this.titulo);
  };
  const t = new Tarea("Comprar pan");
  t.mostrar(); 
  t.otrometodo(); // error, solo mostrar.

- Metodos compartidos en prototype: los metodos se definen una sola vez en el prototipo y todos los objetos creados los comparten.
- Palabra reservadas: this, new,etc.
- Cadena de prototipos :si una propiedad no existe en el objeto, se busca en su prototipo hasta llegar a null.
- Herencia entre constructoras: se enlazan prototipos, ej.: Hija.prototype = Object.create(Padre.prototype);
- Propiedades propias vs heredadas: obj.hasOwnProperty("clave") indica si la propiedad es del objeto o viene del prototipo.


## 2. Creencias de los profesionales: caracteristicas que se creen mejores que en otros lenguajes

- No hacen falta clases: los objetos heredan directamente de otros objetos. Siendo mas simple y concreto.
- Flexibilidad dinamica: se pueden modifcar metodos de un objeto yel cambio se refleja en todos los objetos que delegan de su prototipo.
- Delegacion en lugar de copia: los metodos viven una sola vez en el prototipo y se comparten, lo que ahorra memoria.
- Herencia diferencial: un objeto nuevo solo define lo que tiene de distinto respecto de su prototipo; el resto lo delega.
- Objetos literales: se pueden crear objetos directamente, sin declarar antes un molde.

## 3. Valores: que se considera un buen programa
- Reutilizacion: Poner el comportamiento comun en el prototipo y no repetirlo en cada objeto.
- Encapsulamiento: Cada objeto agrupa sus datos y el comportamiento.
- Polimorfismo: Los objetos pueden responder al mismo metodo cada uno a su manera.
- Cadenas de prototipos cortas y simples
- No modificar los prototipos nativos: Ej: (Array.prototype, Object.prototype), ya que afecta a todo el programa.
- Mantenibilidad: Agregar objetos nuevos sin romper los existentes.

## 4. Ejemplares: problemas canonicos con los que se aprende el paradigma
- Lista de tareas modelada con objetos: cada tarea como objeto con sus metodos (mostrar, editar) en el prototipo.
- Calculadora como objeto con metodos para cada operacion.
- Otro ejemplo: Animal-> Perro, redefiniendo un metodo como hablar().
