import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/models/userLogin';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // UserLogin[] indica que usuarios es un array que puede contener múltiples objetos de tipo UserLogin.
  // Cada objeto en este array debe seguir la estructura definida por la interfaz UserLogin, que tiene dos propiedades: username y password, ambas de tipo string.
  private usuarios: UserLogin[] = [
    {
      id: 1,
      nombre: 'Andres',
      apellido: 'Rojas',
      username: 'MatDre',
      password: bcrypt.hashSync('719397', 10), // Contraseña encriptada
      rol: {
        id: 1,
        nombre: 'users',
      },
    },
    {
      id: 2,
      nombre: 'Peter',
      apellido: 'Parker',
      username: 'SpiderMan',
      password: bcrypt.hashSync('123456', 10), // Contraseña encriptada
      rol: {
        id: 2,
        nombre: 'admin',
      },
    },
  ];
 
  constructor() {
    console.log(this.usuarios.map(user => ({
      username: user.username,
      password: user.password,
    })));

  }

  //validar_usuario es el nombre de la función.
  //userLogin: UserLogin es un parámetro que la función recibe, y es de tipo UserLogin, lo que significa que debe ser un objeto con las propiedades username y password.
  validar_usuario(username: string, password: string): { valid: boolean; rol: string } | null {
    const usuario = this.usuarios.find(user => user.username === username);
    if (usuario && bcrypt.compareSync(password, usuario.password)) {
      return { valid: true, rol: usuario.rol.nombre };
    }
    return null;
  }
}
