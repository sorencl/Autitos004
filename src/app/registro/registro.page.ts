import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiTestService } from '../servicios/api-test.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  user: any = {
    nombre: "",
    apellidos:"",
    email:"",
    password: ""
  }

  constructor(private router: Router, public toastController: ToastController, private api: ApiTestService) { 
    this.formRegistro=new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }
    
  ngOnInit() {
  }

  registrarPersona(){

    this.api.crearUsuario(this.user.nombre, this.user.apellidos, this.user.email, this.user.password).subscribe((res)=>{
      console.log(res)
    });
    
  //this.api.crearUsuario()
}


async presentToast() {
  const toast = await this.toastController.create({
    message: 'Los datos se guardaron correctamente',
    duration: 2000
  });
  toast.present();
}

}