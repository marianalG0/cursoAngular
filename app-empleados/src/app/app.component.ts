import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  //Agregando unos cuantos empleados para que se visualice en la pagina, guardandolo en un array de tipo empleado que es la clase creada
  //empleados:Empleado[]=[];//esta vacio ahora mismo 

  empleados:Empleado[]=[//Rellenando
  //Instanciando esta clase con unos empleados
  new Empleado("Juan","Diaz","Presidente",7500),
  new Empleado("Julio","Cortez","Ingeniero",22000),
  new Empleado("Mariana","Garcia","Ingeniero",20000),
  new Empleado("Erika","May","Arquitecta",19700)
];

//Metodo para enviar con el boton
agregarEmpleado(){
  //Declaramos variable que almacene objeto de tipo empleado que viene del formulario
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario)// Le decimos que guarde las cosas que viene en cada cuadro
  
  //Le decimos que guarde miEmpleado en el array empleados, para que se muestre
  this.empleados.push(miEmpleado);
}

//Creando las variables del banana in box de los input
  //  Estamos haciendo que aqui se guarde la informacion que introduzcamos, que este enlazado
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
