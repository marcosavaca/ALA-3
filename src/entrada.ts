import { createInterface } from "node:readline/promises";
export const rl = createInterface({ input: process.stdin, output: process.stdout });
export async function pedirDato(mensaje: string, opcionesValidas: string[] | null, obligatorio:boolean): Promise<string> 
    {
        while(true) 
        {
            let entrada = await rl.question(mensaje);
            if (opcionesValidas) 
            {
                entrada = entrada.toUpperCase();
                if (opcionesValidas.includes(entrada)) 
                {
                    return entrada;
                }
                console.log(`Opcion no valida. Ingresa: ${opcionesValidas.join(", ")}.\n`);
            } 
            else 
            {
             if (entrada.trim() !== "" || !obligatorio) //si no es obligatorio entonces puede ir cualquier cosa, si es obligatorio pero sin opciones validas cualquier cosa que no sea vacio esta bien ej: Titulo tarea.
                {
                  return entrada;
                }
                console.log("Este campo no puede estar vacío.\n");
            }
        }
    }
export async function pedirFecha(mensaje:string,editar:boolean | null):Promise<string>
    {
    while (true) 
        {
        const entrada = await rl.question(mensaje);
        if (entrada==="")     // En creacion puede ser vacia, porque por defecto colocamos fecha creacion. Y en editar mantenemos.
        { 
            return ""; 
        }
        if (entrada.trim() === "" && editar) //Estamos en editar y ingreso  " " un espacio ya que si no hubiera ingreado un espacio el anterior if hbiera retornado.
        { 
         return " "; 
        } 
        const regex = /^\d{4}-\d{2}-\d{2}$/;


        if (regex.test(entrada)) 
        {
         const [año, mes, dia] = entrada.split("-").map(Number);
         const fechaIngresada = new Date(año, mes - 1, dia); // -1 por que en js va de 0 a 11
        if( fechaIngresada.getFullYear() === año && fechaIngresada.getMonth() === mes - 1 && fechaIngresada.getDate() === dia)
        {
         const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);  // establecemos hora manual para comparar
            if (fechaIngresada >= hoy) 
            {
             return entrada; 
            } 
            else 
            {
             console.log("La fecha debe ser mayor o igual a la de hoy.\n");
            }
        }
        else  // No cumple alguno de los datos.
        {
         console.log("Mes y/o día no válidos\n");
        }
        }
        else  //No cumple ni el formato
        {
         console.log("Formato no válido. Usa el formato AAAA-MM-DD o presiona Enter para omitir.\n");
        }
    }
}
export async function pedirNumero(mensaje: string, min: number | undefined, max: number | undefined): Promise<number> {
    while (true) 
    {
        const entrada = (await rl.question(mensaje)).trim();
        const numero = Number(entrada);

        // Si no se pasa rango como argumento entonces es el menu.
        if (min === undefined || max === undefined ) 
        {
            if (entrada === "" || isNaN(numero))
            {
                console.log("Ingrese un numero valido.\n");
                continue;
            }
            return numero;
        }
        else{
            // Si me pasaron rango -> valido y reintento hasta que sea correcto, "" con Number es 0, por eso se pide !==""
            if (entrada !== "" && !isNaN(numero) && numero >= min && numero <= max)  //isNaN= is not a number, !isNaN, si el numero que me paso el usuario es un numero.
            {
                return numero;
            }
            console.log(`Ingrese un numero entre ${min} y ${max}.\n`);
        }
    }
}
export async function pausa(mensaje: string): Promise<void> 
{
    await rl.question(mensaje);
}
export function cerrar(): void 
    {
     rl.close();
    }