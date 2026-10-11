import {esvacio} from "./validaciones.ts";
 export type Tarea= {
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
    mostrarDetalle():void;
};
 
type TareaConstructor= { // se utiliza para poder usar new Tarea()
    new (
        titulo: string,
        descripcion: string | null,
        estado: string,
        fechaCreacion: Date | null,
        ultimaEdicion: Date | null,
        fechaVencimiento: Date | null,
        dificultad: number
    ): Tarea;
    prototype: Tarea;   //cada tarea tiene el mismo prototipo y se devuelve un objeot tipo tarea
};

export const Tarea = function (
    this: Tarea,
    titulo: string,
    descripcion: string | null,
    estado: string,
    fechaCreacion: Date | null,
    ultimaEdicion: Date | null,
    fechaVencimiento: Date | null,
    dificultad: number
) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fechaCreacion = fechaCreacion;
    this.ultimaEdicion = ultimaEdicion;
    this.fechaVencimiento = fechaVencimiento;
    this.dificultad = dificultad;
} as unknown as TareaConstructor;  // prometemos que es tipo tareaconstructor.

Tarea.prototype.editar = function (this: Tarea, nuevaDescripcion, nuevoEstado, nuevaDificultad, nuevaFechaVencimiento) {
    // nuevaDescripcion ya viene resuelta (mantener/vaciar/nuevo valor) desde operaciones.ts con resolverEdicion().
    this.descripcion = nuevaDescripcion;
    if (nuevoEstado !== "")
    { 
     this.estado = nuevoEstado; 
    }

    if (nuevaDificultad !== "")
    {
        this.dificultad = Number(nuevaDificultad);
    }
    this.fechaVencimiento = nuevaFechaVencimiento;
    this.ultimaEdicion = new Date();
};

function mostrarCampo(mensaje: string,valor:string | Date| null )
    {
        if(esvacio(valor))
        {
            console.log(`${mensaje}: Sin datos \n`);
            return;
        }
        else
        {
        console.log(`${mensaje}: ${valor} \n`);  
        }
    }

Tarea.prototype.mostrarDetalle= function(this:Tarea)
{
    console.log("Esta es la tarea que elegiste: \n");
    console.log(`Titulo: ${this.titulo} \n`);
    console.log(`Dificultad: ${this.dificultad} \n`);
    mostrarCampo("Descripcion", this.descripcion);
    console.log(`Estado: ${this.estado} \n`);
    mostrarCampo("Fecha de creacion", this.fechaCreacion);
    mostrarCampo("Ultima edicion", this.ultimaEdicion);
    mostrarCampo("Fecha de vencimiento", this.fechaVencimiento);
};
Tarea.prototype.coincideEstado = function (this: Tarea, condicion) 
{
    return condicion === null || this.estado === condicion;
};

Tarea.prototype.coincideTitulo = function (this: Tarea, buscar) 
{
    return this.titulo.toLowerCase().includes(buscar.toLowerCase());
};


