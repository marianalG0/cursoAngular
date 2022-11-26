import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';

  //Variable booleana
  registrado=false;

  nombre:string="";
  apellido: string="";
  cargo: string="";
  //entradas:Array<{titulo:string}>;
  entradas:any;

  constructor(){
    //Rellenando el array de entradas

    //Hacemos referencia al array que creamos
    this.entradas=[
      {titulo:"Phython cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Donde quedo pascal?"}
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito";
  }
}
