<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';
import {Drop} from './drop';



@Injectable({
    providedIn: 'root'
  })
  export class DropService {
  
    constructor(private http:HttpClient) { }
    getDrop(): Observable<any> { 
      let url = "/api/indexSneaker.php"; 
      return this.http.get(
         url, { headers: new HttpHeaders({ 'Content-Type':'application/json'}) } 
         ); 
        }
  
  
    postDrop(product:Drop):Observable<any>{
      let url = "/api/indexSneaker.php"
      return this.http.post(
        url,product, {headers:new HttpHeaders({ 'Content-Type':'application/json'})  }
      );
    }
=======
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';
import {Drop} from './drop';



@Injectable({
    providedIn: 'root'
  })
  export class DropService {
  
    constructor(private http:HttpClient) { }
    getDrop(): Observable<any> { 
      let url = "/api/indexSneaker.php"; 
      return this.http.get(
         url, { headers: new HttpHeaders({ 'Content-Type':'application/json'}) } 
         ); 
        }
  
  
    postDrop(product:Drop):Observable<any>{
      let url = "/api/indexSneaker.php"
      return this.http.post(
        url,product, {headers:new HttpHeaders({ 'Content-Type':'application/json'})  }
      );
    }
>>>>>>> e24cd8adcb9b5be1e00c4294b24b3a1a7cc3da92
  }