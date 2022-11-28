import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadoService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import firebase from 'firebase/compat/app';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  constructor(private loginService:LoginService){}

  ngOnInit(): void {

    //Inicializamos la aplicacion 
    firebase.initializeApp({

      apiKey:"AIzaSyCA9db6aR2U0n3faV8i5_RWiKphAIBLfhc",
      authDomain:"mis-clientes-f417f",

    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

  //titulo = 'Listado de Empleados'; Lo pasamos a component Home

  //Agregando unos cuantos empleados para que se visualice en la pagina, guardandolo en un array de tipo empleado que es la clase creada
  //empleados:Empleado[]=[];//esta vacio ahora mismo 

  /*//Creamos el constructor con parametro que es del tipo servicio que creamos
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadoService){

    //Almacena esa informacion en el array vacio 
    // this.empleados=this.empleadosService.empleados;
  } //Acabamos de inyectar el servicio*/

 /* //Primer metodo que se ejecuta en la clase 
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  } llevado a HOMECOMPONENT*/

  //empleados:Empleado[]=[]; llevado a HOMECOMPONENT

/*
//Metodo para enviar con el boton
agregarEmpleado(){
  //Declaramos variable que almacene objeto de tipo empleado que viene del formulario
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario)// Le decimos que guarde las cosas que viene en cada cuadro

  //Antes de que se agregue el empleado a la lista haremos uso del servicio
  //this.miServicio.muestraMensaje("Nombre del empleado : " + miEmpleado.nombre);
  
  //Le decimos que guarde miEmpleado en el array empleados, para que se muestre
    //this.empleados.push(miEmpleado);
    
    //LLamando al metodo para agregar el empleado
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
}

//Creando las variables del banana in box de los input
  //  Estamos haciendo que aqui se guarde la informacion que introduzcamos, que este enlazado
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;*///LLEVAMOS TODO A COMPONENT HOME
}
