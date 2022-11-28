import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login.service";

@Injectable()
export class DataServices{

    //inyectando el module de HttpClientModule
    constructor(private httpClient:HttpClient, private loginService:LoginService){}

       //Metodo para cargar los datos de los empleados de la base de datos
       cargarEmpleados(){

        const token=this.loginService.getIdToken();
        
        return this.httpClient.get('https://mis-clientes-f417f-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }



    //Metodo de guardar preparado para recibir el array de tipo empleado
    guardarEmpleados(empleados:Empleado[]){

        //Utilizar el objeto inyectado, en el ocupamos el metodo post donde le pasamos el link de la base y lo que queremos almacenar en la base
        this.httpClient.put('https://mis-clientes-f417f-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
            response=>console.log("Se ha guardado los empleados: " + response),
            error=>console.log("Error : " + error),
        );
    }

    //Metodo para actualizar y recibira el indice del empleado y los datos 
    actualizarEmpleado(indice:number,empleado:Empleado){
        //Especificar el id en la url 
        let url = 'https://mis-clientes-f417f-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json'; //Url de actualizar 

        //metodo para actualizar 
        this.httpClient.put(url, empleado).subscribe(
            response=>console.log("Se ha modificado el empleado correctamente: " + response),
            error=>console.log("Error : " + error)
            );

        }

    //Metodo para eliminar 
    eliminarEmpleado(indice:number){
        //Especificar el id en la url 
        let url = 'https://mis-clientes-f417f-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json'; //Url de actualizar 

        //metodo para actualizar 
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el empleado correctamente: " + response),
            error=>console.log("Error : " + error)
            );

        }
}