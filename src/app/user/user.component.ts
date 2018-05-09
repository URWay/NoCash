import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../service/autenticacao/autenticacao.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {

  }

  ngOnInit() {
  }

  // Implantar nas próximas páginas
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  onSubmit(userName, password) {
    this.autenticacaoService.login(userName, password).subscribe((data: any) => {
      console.log(data);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    });

  }

}
