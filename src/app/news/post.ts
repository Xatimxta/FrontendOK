export class Post{
    resposta:string="";
    idpost:number;
    topic:string="";
    date:Date;
    iduser: number;
    constructor(resposta:string="" , idpost:number, topic:string="",
    date:Date,iduser:number){
        this.resposta=resposta;
        this.idpost=idpost;
        this.topic=topic;
        this.date=date;
        this.iduser=iduser;
    }
}
