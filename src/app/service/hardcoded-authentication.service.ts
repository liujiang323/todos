import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'jiangliu' && password === 'dummy') {
      sessionStorage.setItem('authenticationUser', username);
      return true;
    }
    return false;
  }

  isUserLogin() {
    let user = sessionStorage.getItem('authenticationUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticationUser')
  }

}
