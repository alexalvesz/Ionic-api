import { Component, OnInit } from '@angular/core';

// Importa biblioteca de formulários
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importa o service da API
import { UsersService } from '../../services/users.service';

// Importa bibliotecas de roteamento
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  // Criar formulário
  public userForm: FormGroup;

  constructor(

    // Cria objeto FormBuilder
    private formBuilder: FormBuilder,

    // Inicializa UsersService
    private usersService: UsersService,

    // Roteamento
    private NavCtrl: NavController,
    private route: ActivatedRoute
  ) {

    // Definindo os campos do formulário
    this.userForm = this.formBuilder.group(
      {
        // Campo 'Id'
        id: [null],

        // Campo 'name' - Obrigatório e deve ter no mínimo 3 caracteres
        name: [                     // Variável que armazena o valor do campo
          null,                     // Valor inicial do campo
          Validators.compose([      // Regras de validação do campo
            Validators.required,    // Campo obrigatório
            Validators.minLength(3) // comprimento mínimo
          ])
        ],

        // Campo 'email' - Obrigatório e deve ter o formato 'a@b'
        email: [
          null,
          Validators.compose([
            Validators.required,
            Validators.email,
            // Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/) // Expressão regular ou Regex
          ])
        ],

        // Campo 'avatar' - Obrigatório e tem que ser um URL
        avatar: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
          ])
        ],

        // Campo 'status' - 0 ou 1
        status: [1],

        // Campo 'passwd' - Orbigatório entre 7 e 25 caracteres com letras, númeoros e alguns símbolos
        passwd: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(/^([a-zA-Z0-9!@#$%&*_\-+=]{7,25})$/)
          ])
        ]
      }
    );
  }

  ngOnInit() { }


  // Método de envio do formulário
  onSubmit() {

    console.log(this.userForm.value);
  }

  // Controlar o ion-toggle 'status' (Solução do 'bug do toggle')
  statusChange() {
    if (this.userForm.value.status === false ) {
      this.userForm.value.status = 0;
    }
    if (this.userForm.value.status === true ) {
      this.userForm.value.status = 1;
    }
    if (this.userForm.value.status === null ) {
      this.userForm.value.status = 0;
    }
  }

}
