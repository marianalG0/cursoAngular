import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  //Le decimos que va a recibir datos, al input le pasamos el nombre identificativo y el tipo que sera el dato
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  empleados:Empleado[]=[//Rellenando
  //Instanciando esta clase con unos empleados
  new Empleado("Juan","Diaz","Presidente",7500),
  new Empleado("Julio","Cortez","Ingeniero",22000),
  new Empleado("Mariana","Garcia","Ingeniero",20000),
  new Empleado("Erika","May","Arquitecta",19700)
];

//Array vacio 
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
