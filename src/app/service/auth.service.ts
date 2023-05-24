import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //ejemplo de autenticación a través de JWT (Jason Web Token)
  //para esto crearía un componente de inicio de sesión, el cual pida usuario y contraseña
  //luego desarrollaría un auth guard el cual verifique si el usuario isLoggedIn.

  private apiUrl = 'apiPagos360'; // URL de la API de autenticación

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  logout() {
    // Eliminar el token de autenticación almacenado en el frontend
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Comprobar si el token de autenticación está almacenado en el frontend
    return !!localStorage.getItem('token');
  }
}
