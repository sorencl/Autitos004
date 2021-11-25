import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiTestService } from '../servicios/api-test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private api: ApiTestService) {}

  ngOnInit() {
  }


  obtenerUsuarios()
  {
    this.api.getUsuario().subscribe((res)=>{
      console.log(res);
      
    })
  }
}
