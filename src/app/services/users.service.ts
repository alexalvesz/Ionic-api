import { Injectable } from '@angular/core';


// Importar as bibliotecas assincronas do Angualar.abs
import { Observable } from 'rxjs';



// Importar as bibliotecas HTTP 
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // URL "base" da API]
  private apiurl = 'http://localhost:8888/api'


  constructor(
    private http: HttpClient 
    
  ) { }
  //Método para obter todos os usuários da API
    getUsers(): Observable<any> {
      
      // Faz o GET na API
      return this.http.get(this.apiurl);
    }

// Método para listar um usuario especifico pelo Id
getUser(id:string): Observable<any> {
  return this.http.get('${this.apiurl}?id=${id}');
}
}
