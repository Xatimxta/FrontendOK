import { Component, OnInit } from "@angular/core";
import { Usuario } from './usuario';
import { UsuarioService } from "./usuario.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({

    selector:'login-tag',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],    
    providers: [UsuarioService]
    
})

export class LoginComponent{
    usuarios: Usuario[] = [];
    login = {};
    name = (<HTMLInputElement> document.getElementById('nousInputs')).value;
    test = document.getElementById("test").innerHTML = name;
    home={
        title:"",
        words:""
    };

    

    constructor(private serviceUser: UsuarioService) { }

    getProducte() {
        
        this.serviceUser.getUser().subscribe(
          (result) => {
            console.log(result["message"]);
            this.usuarios = result["message"];
    
          },
          (error) => {
            console.log(error);
          });
      }

};

