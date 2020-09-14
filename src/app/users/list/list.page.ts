import { Component, OnInit } from '@angular/core';

// Importa service de acesso á API
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  // Variável que identifica se temos usuários para listar 
  noUsers = false;

  // Variável com os dados que vieram da API 
  data: Array<any> = [];

  constructor(

    // Inicializa o serviço de acesso a API 
    private usersService: UsersService
    
    ) { }
  
    // Acrescentar "void" para tornar o método assincrono


  ngOnInit(): void {
    
    // Obtendo os dados da API usando o service
    this.usersService.getUsers().subscribe((res: any) => {

      // Se falhou  na recepção dos dados 
      if (res.status !== 'success') {
        console.error('Falha: $[res.result]');
        return false;
      }

        // Loop para destacar cadastros apagados
        res.result.forEach((value: any) => {
          if (value !== null) {
            this.data.push(value);
          }
        });

// Se não existem usuários (banco de dados vazio 
  if (this.data.length === 0) {
  this.noUsers = true;
}
});
}
}
