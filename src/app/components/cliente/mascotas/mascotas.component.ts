import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  mascotas:any=[];
  mascota:Mascota = new Mascota();
  idUsuarioSesion =localStorage.getItem("idUsuarioSesion");


  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.getMascotas();
    console.log(this.idUsuarioSesion)
  }
  getMascotas(){
    this.api.getMascotas().subscribe(data=>{
      this.mascotas=data;
      console.log(this.mascotas);
    }) 
  }

  verMascota(parametro:any){
    this.mascota=parametro
    console.log(this.mascota.nombre)
    location.href="clienteVerMascota"
    sessionStorage.setItem('MascotaID',JSON.stringify( this.mascota.idMascota))
  }


}
