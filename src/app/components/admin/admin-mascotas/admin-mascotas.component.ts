import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-mascotas',
  templateUrl: './admin-mascotas.component.html',
  styleUrls: ['./admin-mascotas.component.css']
})
export class AdminMascotasComponent implements OnInit {
  mascotas:any=[];


  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.getMascotas();
  }
  getMascotas(){
    this.api.getMascotas().subscribe(data=>{
      this.mascotas=data;
      console.log(this.mascotas);
    }) 
  }
  crearMascota(){
    location.href="/adminCrearMascota"
  }
  verMascota(parametro:any){}

}
