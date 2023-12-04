import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  url = 'https://localhost:4000/api/camiones/'

  constructor(private http: HttpClient) { }

  getRutas(): Observable<any>{
    return this.http.get(this.url);
  }

}
