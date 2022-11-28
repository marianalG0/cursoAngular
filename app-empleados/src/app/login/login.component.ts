import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService){}

  //Metodo para rescatar el email y password
  login(form:NgForm){
    //Almacenamos lo que viene del formulario, lo que despues de value es el name del cuadro d texto
    const email = form.value.email
    const password = form.value.password

    this.loginService.login(email, password);
  }
}
