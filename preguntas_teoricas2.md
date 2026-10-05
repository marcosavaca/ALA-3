### Características de OOP que utilice ejercicio 3:
- 0:Modularidad: No cuenta por que ya esta aplicado esta característica por el anterior ejercicio ALA-2.
- 1:Encapsulamiento: Corregi el comortamiento de cada tarea ahora a no esta en funciones externas:
    Antes en verdetalletarea:
    listaDeTareas[indice-1].dificultad =Number(nuevaDificultad);
    Ahora, el método propio editar la actualiza, todo en uno:
    listaDeTareas[indice-1].editar(nuevaDescripcion, nuevoEstado, nuevaDificultad, nuevaFechaVencimiento);


- 2:Abstraccion: Mediante la interface de tarea que permite asegurar que cada tarea tenga los mismos atributos y métodos.
    Ejemplo:
    export interface Tarea {
        titulo: string;
        descripcion: string | null;
        estado: string;
        fechaCreacion: Date | null;
        ultimaEdicion: Date | null;
        fechaVencimiento: Date | null;
        dificultad: number;
        editar(nuevaDescripcion: string | null, nuevoEstado: string, nuevaDificultad: string, nuevaFechaVencimiento: Date | null): void;
        coincideEstado(condicion: string | null): boolean;
        coincideTitulo(buscar: string): boolean;
    }

En cada instancia tiene el mismo método ejemplo:
if(listaDeTareas[i].coincideEstado(condicion))



### Características no utilizadas:
- Herencia: No se utilizo ya que solo existen tareas y no otro tipo de subtarea por asi decirlo.
- Polimorfismo: No se utilizo por que no tenemos mas de un objeto solo tarea, por lo tanto no podemos agrupar métodos en diferentes objetos.
- Principio de ocultación: No se uso, ya que los atributos de Tarea  son publicos en la interfaz, entonces se puede hacer  listaDeTareas[i].atributo =  "algo" directamente, sin pasar por sus métodos.
 Creo que no fue necesario ya que solo se edita en la función verdetalletarea del modulo operaciones.ts por lo tanto no se mezcla en funciones, ahora si tuviéramos mas de una que lo utilice seria
 necesario tener restricciones para no haya errores.