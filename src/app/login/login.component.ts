import { Component, OnInit } from '@angular/core';

import { LoginService } from './../Service/login.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
        
  }

  onSubmit(form: any) {   
      this.loginService.Login(form);
  }

  ngOnInit() {
  }

}
