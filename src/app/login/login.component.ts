import { Component, OnInit } from "@angular/core";
import { Usuario } from './usuario';
import { UsuarioService } from "./usuario.service";

@Component({

    selector:'login-tag',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],    
    providers: [UsuarioService]
})

export class LoginComponent{
    usuarios: Usuario[] = [];
    login = {};
    home={
        title:"",
        words:""
    };

    constructor(private serviceUser: UsuarioService) { }

    getProducte() {
        this.serviceUser.getProducte().subscribe(
          (result) => {
            console.log(result["message"]);
            this.usuarios = result["message"];
    
          },
          (error) => {
            console.log(error);
          });
      }

};

