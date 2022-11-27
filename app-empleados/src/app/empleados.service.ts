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

  //Metodo para encontrar un empleado
  encontrarEmpleado(indice:number){
    //almacenados el empleado con el id que encuentra
    let empleado:Empleado=this.empleados[indice];

    return empleado;
  }

  //Metodo para actulizar que recibe tanto el indice como el empleado
  actualizarEmpleado(indice:number, empleado:Empleado){
    //Variable, almacenamos la informacion que hay en la posicion del array 
    let empleadoModificado=this.empleados[indice];

    //le pasamos el valor que ya se almaceno para qu elo cambie 
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

  }

  //Servicio de eliminar
  eliminarEmpleado(indice:number){
    //Metodo para eliminar en un array en JS 
    this.empleados.splice(indice,1);
  }
}