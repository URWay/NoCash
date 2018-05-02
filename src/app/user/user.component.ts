import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService: UserService, private router: Router) {
        
  }

  ngOnInit() {
  }

  // Implantar nas próximas páginas
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  onSubmit(userName, password){
    this.userService.userAuthentication(userName, password).subscribe((data : any)=>{
      localStorage.setItem('userToken', data.acess_token);
      this.router.navigate(['/dash-board']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });

  }

}
