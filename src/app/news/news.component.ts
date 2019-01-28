import { Component } from "@angular/core";

@Component({

    selector:'news-tag',
    templateUrl:'./news.component.html',
    styleUrls:['./news.component.css']    

})

export class NewsComponent{
    news={
        title:"",
        words:""
    };

};