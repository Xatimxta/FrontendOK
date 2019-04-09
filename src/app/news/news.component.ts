import { Component, OnInit } from "@angular/core";
import { PostService } from "./news.service";
import { Post } from './post';

@Component({

    selector:'news-tag',
    templateUrl:'./news.component.html',
    styleUrls:['./news.component.css'],
    providers:[PostService]

})

export class NewsComponent implements OnInit {
    news: Post[] = [];

    constructor(private serviceUser: PostService) { }

    ngOnInit(): void {

        this.getNews();
      }

      getNews() {
        this.serviceUser.getNews().subscribe(
          (result) => {
            console.log(result["data"]);
            this.news = result["data"];
    
          },
          (error) => {
            console.log(error);
          });
      }

};