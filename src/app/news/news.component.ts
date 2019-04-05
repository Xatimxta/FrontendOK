import { Component, OnInit } from "@angular/core";
import { PostService } from "./news.service";
import { Post } from './post';

@Component({

    selector:'news-tag',
    templateUrl:'./news.component.html',
    styleUrls:['./news.component.css'],
    providers:[PostService]

})

export class NewsComponent {
    news: Post[] = [];

    constructor(private serviceUser: PostService) { }

};