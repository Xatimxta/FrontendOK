import { Component, OnInit } from "@angular/core";
import { Injectable } from '@angular/core';

import {Observable, ObservableInput} from 'rxjs';
import {Usuario} from './usuario';
import { UsuarioService } from "./usuario.service";
@Component({

    selector:'usuarios-tag',
    templateUrl:'./usuarios.component.html',
    styleUrls:['./usuarios.component.css'] ,
    providers:[UsuarioService]  

})

export class UsuariosComponent implements OnInit{
  constructor(private serviceUser:UsuarioService ) { }
    
  ngOnInit(): void {
   
    this.getProducte();
  }
  getProducte(){
    this.serviceUser.getProducte().subscribe(
      (result) =>{
         console.log(result);
         },
      (error) =>{ 
        console.log(error); 
       });
  }
    usuarios = {};
    home={
        title:"",
        words:""
    };
    


};
/*
export class UsuarioService {
  
    constructor(private http:HttpClient) { }
    
    getProducte(): Observable<any> { 
      let url = "plugwalk.alwaysdata.net"; 
      return this.http.get(
         url, { headers: new HttpHeaders({ 'Content-Type':'application/json'}) } 
         ); 
        }
  
  
    postProducte(product:Usuario):Observable<any>{
      let url = "/apiProductos.php/producto/"
      return this.http.post(
        url,product, {headers:new HttpHeaders({ 'Content-Type':'application/json'})  }
      );
    }
  
    
    deleteProducte(product:Usuario):Observable<any>{
      let url = "/apiProductos.php/producto_delete/54"
      return this.http.post(
        url,product, {headers:new HttpHeaders({ 'Content-Type':'application/json'})  }
      );
    }
  
  }
*/
