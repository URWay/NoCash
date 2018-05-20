import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../service/autenticacao/autenticacao.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from './../../../model/usuario';
import swal from 'sweetalert';

@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {

  }

  // Implantar nas próximas páginas
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  onSubmit() {
    this.router.navigate(['/painel']);
    /*this.autenticacaoService.login(this.usuario).subscribe((data: any) => {
      console.log(data);
    },
    (err: any) => {
    })*/

  }

  testar() {
    console.log(this.usuario);
  }
}
