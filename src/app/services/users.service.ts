import { Injectable } from '@angular/core';

<<<<<<< HEAD
// Importar as bilbiotecas assíncronas do Angular
import { Observable } from 'rxjs';

// Importar as bilbiotecas HTTP
=======
// Importar as bibliotecas assincronas do Angualar.abs
import { Observable } from 'rxjs';

// Importar as bibliotecas HTTP 
>>>>>>> parent of 086b358... aula07
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL "base" da API
  private apiurl = 'http://localhost:8888/api';

  constructor(
    private http: HttpClient
  ) { }
<<<<<<< HEAD

  // Método para obter todos os usuários da API
  getUsers(): Observable<any> {

    // Faz o GET na API
    return this.http.get(this.apiurl);
  }

  // Método para listar um usuário específico pelo Id
  getUser(id: string): Observable<any> {

    // Consulta à API no formato "http://localhost:8888/api?id={id}"
    return this.http.get(`${this.apiurl}?id=${id}`);
  }
}
=======
  //Método para obter todos os usuários da API
    getUsers(): Observable<any> {
      
      // Faz o GET na API
      return this.http.get(this.apiurl);
    }


}
>>>>>>> parent of 086b358... aula07
