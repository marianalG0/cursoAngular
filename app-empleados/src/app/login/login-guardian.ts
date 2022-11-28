import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";


@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginService:LoginService, private router: Router){}

    //Implementamos el metodo de canActivate ya que es obligatorio 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        //Decirle que si esta logueado debe dejar entrar a la pagina y si no, no lo deje. 
        if(this.loginService.estaLogueado()){
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false; //porque NO esta logueado
        }

    }
    
}