import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: Http){

    }

    LoginUsuario(form: any) {

        let url = 'http://carteiravirtual.azurewebsites.net/PJVWebServiceCliente.asmx';
        let body = `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
              <soap:Body>
                <Login xmlns="http://tempuri.org/">
                  <email>${form.value.email}</email>
                  <senha>${form.value.senha}</senha>
                </Login>
              </soap:Body>
            </soap:Envelope>`;

        let headers = new Headers({ 'Content-Type': 'text/xml' });
        headers.append('Accept', 'text/xml');
        
        let options = new RequestOptions({ headers: headers });

        this.http.post(url, body, options)
            .map(res => res)
        .subscribe(dados => console.log(dados));
    }

    soapCall(form: any) {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.open('POST', 'http://carteiravirtual.azurewebsites.net/PJVWebServiceCliente.asmx?op=Login', true);

        let sr =
            `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
              <soap:Body>
                <Login xmlns="http://tempuri.org/">
                  <email>${form.value.email}</email>
                  <senha>${form.value.senha}</senha>
                </Login>
              </soap:Body>
            </soap:Envelope>`;

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                let xml = xmlhttp.responseXML;
                console.log(xml);                
            }
        }

        // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.setRequestHeader('Accept', 'text/xml');

        xmlhttp.responseType = "document";
        xmlhttp.send(sr);
    }
}