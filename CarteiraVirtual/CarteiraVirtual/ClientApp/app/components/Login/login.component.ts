import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import swal from 'sweetalert';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    valores: any = {
        email: null,
        senha: null
    }

    onSubmit(form: any) {
        
        if (form.submitted) {
            if ((form.value.email != null && form.value.email != "") && (form.value.senha != null || form.value.senha != "")) {
                this.loginService.LoginUsuario(form);
            } else {
                swal("E-mail ou senha fornecidos inválidos");
            }
        }

    }

    constructor(private loginService: LoginService) {
        
    }
}