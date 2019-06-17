import { Component, OnInit } from "@angular/core";
import { PostService } from "./news.service";
import { Post } from './post';
import { Router } from "@angular/router";

@Component({

  selector: 'news-tag',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [PostService]

})

export class NewsComponent implements OnInit {
  news: Post[] = [];
  failproxy: string = "";
  totalPagesInPaginator: number[];
  currentPage: number;
  pageSize: number = 3
  private dataset: Post[];

  constructor(private serviceNews: PostService, private _router: Router) { }

  ngOnInit(): void {
    this.getNews();
  }

  setCurrentPage(cPage: number) {
    this.currentPage = cPage

    this.news = [...this.dataset].splice(this.pageSize * cPage, this.pageSize);
  }

  getNews() {
    this.serviceNews.getNews().subscribe(
      (result) => {
        this.dataset = result["data"]

        this.currentPage = 0
        let totalShoes = this.dataset.length

        this.totalPagesInPaginator = Array(Math.ceil(totalShoes / this.pageSize)).fill(0).map((x, i) => i);

        this.news = [...this.dataset].splice(0, this.pageSize);
      },
      (error) => {
        console.log(error);
      });
  }

  checkUser3() {
    var token = localStorage.getItem('token');
    console.log(token);
    if (token == null) {
      this.failproxy = "No puedes acceder sin logear"
    } else {
      this._router.navigate(['/news']);
    }
  }

};
