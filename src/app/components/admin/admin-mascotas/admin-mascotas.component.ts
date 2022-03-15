import { Mascota } from './../../../modelos/mascota';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-mascotas',
  templateUrl: './admin-mascotas.component.html',
  styleUrls: ['./admin-mascotas.component.css']
})
export class AdminMascotasComponent implements OnInit {
  mascotas:any=[];
  mascota:Mascota = new Mascota();


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
  verMascota(parametro:any){
    this.mascota=parametro
    console.log(this.mascota.nombre)
    location.href="/adminVerMascota"
    sessionStorage.setItem('MascotaID',JSON.stringify( this.mascota.idMascota))
    //this.api.setProductosWishList(this.producto.idproducto,this.producto);
  }
}
