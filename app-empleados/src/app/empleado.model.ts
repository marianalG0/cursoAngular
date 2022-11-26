export class Empleado{
    //Constructor encargado de crear en definitiva estos objetos, este constructor recibira parametros
    constructor(nombre:string, apellido:string, cargo:string, salario:number){
        //Iniciar los campos al valor que le pasemos al constructor 

        //uno es la clase y el otro el parametro que pasamos al constructor
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }
    //Creando las porpiedades
    nombre:string=""; //sera de tipo string que iniciara en cadena vacia
    apellido:string="";
    cargo:string="";
     salario:number=0; //de tipo numerico que va a iniciar igual a 0


}