import { Rol } from "./rol";

export interface UserLogin{
    // propiedades
    id: number;
    nombre: string;
    apellido: string;
    username: string;
    password: string;
    rol: Rol;
}