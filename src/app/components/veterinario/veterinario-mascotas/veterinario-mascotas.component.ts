import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-veterinario-mascotas',
  templateUrl: './veterinario-mascotas.component.html',
  styleUrls: ['./veterinario-mascotas.component.css']
})
export class VeterinarioMascotasComponent implements OnInit {
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
    location.href="/veterinarioVerMascota"
    sessionStorage.setItem('MascotaID',JSON.stringify( this.mascota.idMascota))
    //this.api.setProductosWishList(this.producto.idproducto,this.producto);
  }

}
