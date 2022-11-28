import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadoService{
  //Haciendo la inyeccion del servicio
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

  }

  //Metodo que recibira por parametro un array 
  setEmpleados(misEmpleados:Empleado[]){

    //Decirle que en el array vacio es igual al array que le pasamos por parametro 
    this.empleados=misEmpleados;

  }

  //Encargado de obtener los datos del dataServices
  obtenerEmpleados(){
    return this.dataService.cargarEmpleados(); //Devuelve un observable
  }

  empleados:Empleado[]=[];

  /*
    //Recopilar los datos hipotetica de una base 
    empleados:Empleado[]=[//Rellenando

    //Instanciando esta clase con unos empleados
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Julio","Cortez","Ingeniero",22000),
    new Empleado("Mariana","Garcia","Ingeniero",20000),
    new Empleado("Erika","May","Arquitecta",19700)
  ];
*/

  //Metodo encargado de agregar un empleado al componente en el que se inyecte el servicio 
  agregarEmpleadoServicio(empleado:Empleado){
    //LLamar al servicio de la ventana emergente 
    this.servicioVentanaEmergente.muestraMensaje("Persona que se agrega : " + "\n" + empleado.nombre + "\n" + "Salario : " + empleado.salario);

    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);
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

    //Llamamos al metodo de actualizar que acabamos de crear
    this.dataService.actualizarEmpleado(indice,empleado);
  }

  //Servicio de eliminar
  eliminarEmpleado(indice:number){
    //Metodo para eliminar en un array en JS 
    this.empleados.splice(indice,1);

    //llamando el metodo para eliminar en la base de datos
    this.dataService.eliminarEmpleado(indice);

    //Reconstruirlo, volvemos a guardar los registros

    if(this.empleados!=null)this.dataService.guardarEmpleados(this.empleados);
    
  }
}