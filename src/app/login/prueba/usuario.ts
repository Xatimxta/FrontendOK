export class Usuario{
    resposta:string="";
    nombre:string="";
    apellido:string="";
    edad:number=0;
    direccion:string="";
    birthdate:Date;
    email:string="";
    password:string="";
    constructor(resposta:string="" , nombre:string="", apellido:string="", edad:number=0, direccion:string="", 
    birthdate:Date, email:string="", password:string=""){
        this.resposta=resposta;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.direccion=direccion;
        this.birthdate=birthdate;
        this.email=email;
        this.password=password;
    }
}