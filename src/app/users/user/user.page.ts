import { Component, OnInit } from '@angular/core';

// Importa o service de acesso à API
import { UsersService } from '../../services/users.service';

// Importa biblioteca de rotas dinâmicas
import { ActivatedRoute } from '@angular/router';

// Importa biblioteca de navegação
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  // Variável para armazenar o Id na forma de número
  id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);

  // Variável que identifica se temos usuário
  noUser = false;

  // Variável com os dados do usuário obtido
  data: any;

  constructor(
    // Inicializa service da API
    private usersService: UsersService,

    // Inicializa ActivatedRoute
    private activatedRoute: ActivatedRoute,

    // Inicializa NavController
    private navController: NavController
  ) { }

  ngOnInit() {

    // Obtendo usuário da API
    this.usersService.getUser(this.id.toString()).subscribe((res: any) => {

      // Caso a API falhe em obter os dados
      if (res.status !== 'success') {

        // Exibe erro no console do anvegador
        console.error(`Erro: ${res.result}`);

        // Sai sem fazer nada
        return false;
      }

      // Se a API não retornou ninguém
      if (res.result === 'No record found') {

        // Informa para a view
        this.noUser = true;

        // Sai sem fazer nada
        return false;

        // Se usuário foi encontrado
      } else {

        // Obtém os dados e armazena em "data"
        this.data = res.result;
      }
    });
  }

  // Ação do botão apagar
  delUser(id: string, name: string) {

    // Pedir confirmação
    if (!confirm(
      `Tem certeza que deseja apagar "${name}"?\n
    Esta ação é irrersível!\n
Clique em [Ok] para apagar ou em [Cancelar] para não apagar...`
    )) {

      // Sair sem fazer nada
      return false;
    }

    // Apagar o registro
    this.usersService.deleteUser(this.id.toString()).subscribe((res: any) => {

      // Se apagou
      if (res.status === 'success' && res.result === 'Record deleted successfully') {

        // Feeback
        alert(`Usuário apagado com sucesso!\n\nClique em [Ok] para continuar...`);

        // Retorna para a listagem de usuários
        this.navController.navigateForward('/usuarios/' + this.genString(7));
      }
    });
  }

  // Gerador de caracteres aleatórios
  genString(len: number) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    let rnd = '';
    for (let i = 0; i < len; i++) {
      const rnum = Math.floor(Math.random() * letters.length);
      rnd += letters.substring(rnum, rnum + 1);
    }
    return rnd;
  }
}