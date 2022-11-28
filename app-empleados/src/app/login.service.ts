import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //Para poder usar tmbn la autenticacion 
import 'firebase/compat/firestore';
import { CookieService } from "ngx-cookie-service";

@Injectable() //Para que sea injectable
export class LoginService{

    constructor(private router:Router, private cookies:CookieService){}

    token:string;
    //Agregamos el token como especie de codigo de seguridad
    login(email:string,password:string){
        //Autenticando en la base de firebase, debe comporbar si existe en la base este usuario
        firebase.auth().signInWithEmailAndPassword(email,password).then(

            //Capturamos el token y redirijimos a la pagina de inicio 
            response=>{

                //Usuario se autentica
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        //Genera el token
                        this.token=token;
                        this.cookies.set("token",this.token); //se guarda en la cookie
                        this.router.navigate(['/']);
                    }
                )
            }

        )//Nos va a dar una respuesta y se conoce como promesa y con el then procesamos esa promesa 

    }
    getIdToken(){
        //return this.token;
        return this.cookies.get("token");
    }

    estaLogueado(){
        //console.log(this.token);

        //Nos va a devolver el token creado 
        //return this.token;
        return this.cookies.get("token");
    }

    //Funcion que cambie el token cuando el usuario hace logout 
    logout(){
        firebase.auth().signOut().then(()=>{
            this.token=""; //Cuando hace logout lo deje como cadena vacia

            this.cookies.set("token",this.token);//Reescriba el cookie con cadena vacia

            this.router.navigate(['/']);
            //Actualice la pagina automaticamente
            window.location.reload();
        })
    }
}