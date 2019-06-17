import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Post } from './post';
import { of } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getNews(): Observable<any> {
     let url = "/api/indexPost.php";
    return this.http.get(
      url, { headers: new HttpHeaders({ 'Content-Type':'application/json'}) }
        );
       

  /* return of({
      data: [{
        title: 'hola 1',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cupiditate. Accusamus, voluptatem perferendis! Expedita explicabo vel consectetur. Ipsam quia enim harum. Qui adipisci quia ipsa dignissimos ab cumque deserunt voluptatibus!',
        url_post: 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660'
      },
      {
        title: 'zapatilla 2',
        body: 'test 2',
        url_post: 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660'
      },
      {
        title: 'zapatilla 3',
        body: 'test 3',
        url_post: 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660'
      },
      {
        title: 'zapatilla 4',
        body: 'test 4',
        url_post: 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660'
      },
      {
        title: 'zapatilla 5',
        body: 'test 5',
        url_post: 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660'
      },
      {
        title: 'zapatilla 6',
        body: 'test 5',
        url_post: 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660'
      }]
    });*/
  }


  postNew(newpost: Post): Observable<any> {
    let url = "/api/indexPost.php"
    return this.http.post(
      url, newpost, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  editNew(newpost: Post): Observable<any> {
    let url = "/api/indexPost.php"
    return this.http.post(
      url, newpost, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }


}

