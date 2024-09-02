import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/api/Auth/authservice.service';
import { UsersService } from 'src/app/api/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(
    private authService: AuthserviceService,
    private _usuarioService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {}

  login(username: string, password: string) {
    const resultado = this._usuarioService.validar_usuario(username, password);
    if (resultado && resultado.valid) {
      console.log('Usuario existe');
      this.authService.login({
        username,
        rol: resultado.rol
      });

      if (resultado.rol === 'admin') {
        this.router.navigate(['admin-home'], {
          state: { usuario: this.authService.getCurrentUser() }
        });
      } else {
        this.router.navigate(['inicio'], {
          state: { usuario: this.authService.getCurrentUser() }
        });
      }
    } else {
      console.error('Usuario no existe');
    }
  }
}



