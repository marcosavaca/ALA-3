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

interface TareaConstructor {
    new (
        titulo: string,
        descripcion: string | null,
        estado: string,
        fechaCreacion: Date | null,
        ultimaEdicion: Date | null,
        fechaVencimiento: Date | null,
        dificultad: number
    ): Tarea;
    prototype: Tarea;
}

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
} as unknown as TareaConstructor;

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

Tarea.prototype.coincideEstado = function (this: Tarea, condicion) 
{
    return condicion === null || this.estado === condicion;
};

Tarea.prototype.coincideTitulo = function (this: Tarea, buscar) 
{
    return this.titulo.toLowerCase().includes(buscar.toLowerCase());
};