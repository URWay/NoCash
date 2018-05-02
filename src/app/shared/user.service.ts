import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
    //readonly rootUrl = 'http://carteiravirtualws.azurewebsites.net/nocash/ws/';
    readonly rootUrl = 'http://localhost:8080/ws/cliente/';
    
    constructor(private http: HttpClient){

    }    

    userAuthentication(userName, password){
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
        return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
    }

}