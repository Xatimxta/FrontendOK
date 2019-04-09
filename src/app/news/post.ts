export class Post{
    idpost:number;
    topic:string="";
    date:Date;
    iduser: number;
    constructor(idpost:number, topic:string="",
    date:Date,iduser:number){
        this.idpost=idpost;
        this.topic=topic;
        this.date=date;
        this.iduser=iduser;
    }
}
