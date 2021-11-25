import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {


  apiBase = 'https://emprende.asistenciataller.cl/API/v2'
  constructor(private http:HttpClient) { }

getUsuario(): Observable<any>{

  return this.http.get(this.apiBase+"/usuarios/99999").pipe();
}

crearUsuario(nombre,apellidos, correo, password)
{
  return this.http.post(this.apiBase+"/crearUsuario",  {
    "nombre": nombre,
    "apellidos": apellidos,
    "correo": correo,
    "password": password,
    "token_equipo": "99999"
  }
).pipe();
}



}
