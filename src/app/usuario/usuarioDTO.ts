export interface usuarioDTO{
    id: string,
    nombre: string,
    apellido: string,
    email: string,
    direccion: string,
    password:string,
    rol: number
}
export enum genero{
    femenino,
    masculino
}
export enum roles{
    admin,
    director,
    profesor,
    alumno
}