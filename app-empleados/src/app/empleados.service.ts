import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadoService{
  //Haciendo la inyeccion del servicio
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

  }

    //Recopilar los datos hipotetica de una base 
    empleados:Empleado[]=[//Rellenando

    //Instanciando esta clase con unos empleados
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Julio","Cortez","Ingeniero",22000),
    new Empleado("Mariana","Garcia","Ingeniero",20000),
    new Empleado("Erika","May","Arquitecta",19700)
  ];

  //Metodo encargado de agregar un empleado al componente en el que se inyecte el servicio 
  agregarEmpleadoServicio(empleado:Empleado){
    //LLamar al servicio de la ventana emergente 
    this.servicioVentanaEmergente.muestraMensaje("Persona que se agrega : " + "\n" + empleado.nombre + "\n" + "Salario : " + empleado.salario);

    this.empleados.push(empleado);
  }
}