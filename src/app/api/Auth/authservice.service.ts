import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private loggedIn = false;
  private currentUser: any = null;

  constructor() {}

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login(user: any) {
    this.loggedIn = true;
    this.currentUser = user;
  }

  logout() {
    this.loggedIn = false;
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}


