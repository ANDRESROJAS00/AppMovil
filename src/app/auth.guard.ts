import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthserviceService } from './api/Auth/authservice.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthserviceService);
  const router = inject(Router);

  console.log('Verificando autenticación...');
  if (authService.isAuthenticated()) {
    console.log('Usuario autenticado');
    return true;
  } else {
    console.log('Usuario no autenticado, redirigiendo a login');
    router.navigate(['/login']);
    return false;
  }
};




