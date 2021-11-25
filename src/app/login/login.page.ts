import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiTestService } from '../servicios/api-test.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  user: any = {
    email:"",
    password: ""
  }

  error:string="";

  constructor(private router: Router, private api : ApiTestService) {
    this.formularioLogin=new FormGroup({
      emailUsuario: new FormControl('', Validators.required), 
      passUsuaruio: new FormControl('',  Validators.required)
    });
   }

  ngOnInit() {
  }


 // entrarUsuario()
  //{this.api.loginUsuario(this.user.email, this.user.password).subscribe((res)=>{
   // console.log(res)
  //});
//}
}
