import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: Http){

    }

    Login(form: any) {
        alert("teste");
    }

}