export class Usuario{
    resposta:string="";
    iduser:number;
    name:string="";
    surname:string="";
    birthdate:Date;
    address: string="";
    email:string="";
    password:string="";
    constructor(resposta:string="" , iduser:number, name:string="", surname:string="",
    birthdate:Date,address:string="", email:string="", password:string=""){
        this.resposta=resposta;
        this.iduser=iduser;
        this.name=name;
        this.surname=surname;
        this.birthdate=birthdate;
        this.address=address;
        this.email=email;
        this.password=password;
    }
}

/*export class Usuario{
    resposta:string="";
    iduser:number;
    name:string="";
    surname:string="";
    birthdate:Date;
    address: string="";
    email:string="";
    password:string="";
    constructor(resposta:string="" , iduser:number, name:string="", surname:string="",
    birthdate:Date,address:string="", email:string="", password:string=""){
        this.resposta=resposta;
        this.iduser=iduser;
        this.name=name;
        this.surname=surname;
        this.birthdate=birthdate;
        this.address=address;
        this.email=email;
        this.password=password;
    }
}
 */
