import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui ira un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit{

  //Propiedades 
  nombre = "Juan";
  apellido = "Diaz";
  //private edad = "18";//Modificador de acceso
  edad = 18;
  empresa="Google";

 /* cambiaEmpresa(event:Event){
    //Lo eliminamos para usar el banana in box
    //Haciendo el casting 
    //this.empresa=(<HTMLInputElement>event.target).value;
  }*/

  //Permitir de acceder al valor de una propiedad
 /* getEdad(){
    return this.edad;//Nos devuelva la edad de la clase 
  }*/
 habilitacioncuadro=false;
 usuRegistrado=true;

 textoDeRegistro="No hay nadie registrado";

 //FUNCION PARA EL PROPERTY DE EL CHECKBOX
 getRagistroUsuario(){
   //Esta funcion 
   this.usuRegistrado=false;
 }

//FUNCION PARA EL EVEN BINDING
setusuarioRegistrado(event:Event){
  //alert("El usuario se acaba de registrar");
  
  //this.textoDeRegistro="El usuario se acaba de registrar";

  //alert(event.target)//Nos sale el tipo de objeto que se crea

  //Transformando el objeto del evento en un objeto html del tipo para poder acceder a su propiedad
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  }else{
    this.textoDeRegistro="No hay nadie registrado";
  }

}


  /* FUNCION PARA ENVIAR EL VALOR CON EL BOTON VIDEO 8
  llamaEmpresa(value:String){
    //Funcion que se limita a recibir el parametro
  }*/

  constructor(){}
  ngOnInit(): void {
    
  }
}
