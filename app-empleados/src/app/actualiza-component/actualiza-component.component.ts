import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  constructor(private router:Router, private empleadosService:EmpleadoService, private route:ActivatedRoute){}
  //Para volver con el btn 
  volverHome(){
    //Haciendo la redireccion 
    this.router.navigate(['']);
  }

  titulo = 'Listado de Empleados';

  ngOnInit(): void {

    //Rescatando el valor de accion
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.empleadosService.empleados;

    //diciendole que reciba el indice que le enviamos en la ruta, rescatamos el id y lo almacenamos
    this.indice=this.route.snapshot.params['id'];

    //Objeto de tipo empleado, llamando a un metodo que le pasamos el indice para que lo encuentre 
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);


    //Cargamos la informacion
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  empleados:Empleado[]=[];
  accion:number;

/*actualizaEmpleado(){
 
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario)
  
  //LLamamos a un metodo encargado de actualiza 
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

     //Haciendo la redireccion 
     this.router.navigate(['']);
}

//Funcion para eliminar
eliminaEmpleado(){

    //LLamamos a un metodo encargado de eliminar 
    this.empleadosService.eliminarEmpleado(this.indice);

     //Haciendo la redireccion 
     this.router.navigate(['']);

}*/

actualizaEmpleado(){
 
  if(this.accion==1){
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario)
  
  //LLamamos a un metodo encargado de actualiza 
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

     //Haciendo la redireccion 
     this.router.navigate(['']);
  }else{
         //LLamamos a un metodo encargado de eliminar 
    this.empleadosService.eliminarEmpleado(this.indice);

    //Haciendo la redireccion 
    this.router.navigate(['']);
  }
}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

indice:number;
}
