import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Usuario } from '../../model/usuario';
import { environment } from '../../../environments/environment';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    if (usuario.email && usuario.senha) {
      const jsonCliente = {
        'emailCliente' : usuario.email,
        'senhaCliente' : usuario.senha
      };
      return this.httpClient.post(environment.apiEndpoint +
        `clientes/login/`, JSON.stringify(jsonCliente),
        { headers: { 'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*'},
          params: {}, responseType: 'text', observe: 'response'})
        .map((res: HttpResponse) => {

        }).catch((error: any) => {
          return error;
        });
    } else {
      return Observable.of<any[]>([]);
    }
  }

}
