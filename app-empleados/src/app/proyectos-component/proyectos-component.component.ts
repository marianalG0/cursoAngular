import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit{

  constructor(private router:Router, private empleadosService:EmpleadoService){}
  //Para volver con el btn 
  volverHome(){
    //Haciendo la redireccion 
    this.router.navigate(['']);
  }

  titulo = 'Listado de Empleados';

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  empleados:Empleado[]=[];

agregarEmpleado(){
 
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario)
  

    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

     //Haciendo la redireccion 
     this.router.navigate(['']);
}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
