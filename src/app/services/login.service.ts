import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioLog } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://localhost:4000/api/usuarios/auth'

  constructor(private http: HttpClient) { }

  autentificarUsuario(usuario: UsuarioLog): Observable<any>{
    return this.http.post(this.url, usuario);
  }

}
