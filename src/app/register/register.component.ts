import { Component } from "@angular/core";

@Component({

    selector:'register-tag',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']    

})

export class RegisterComponent{
    register={
        title:"",
        words:""
    };

};