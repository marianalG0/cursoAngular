import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements  OnInit{
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadoService){
     // this.empleados=this.empleadosService.empleados;
  }

  ngOnInit(): void {
   // this.empleados=this.empleadosService.empleados; Cargaba el array de forma manual que teniamos con datos

   //Suscribiendonos al observable para obtener la informacion , en el subscibre le pasamos una variable donde se almacena los datos
   this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{

    console.log(misEmpleados);

    //Almacenados lo que tiene misEmpleados en el array empleados
    this.empleados=Object.values(misEmpleados);

    //Llamamos el metodo creado 
    this.empleadosService.setEmpleados(this.empleados);

   });

  }

  empleados:Empleado[]=[];

agregarEmpleado(){
 
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario)
  

    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
