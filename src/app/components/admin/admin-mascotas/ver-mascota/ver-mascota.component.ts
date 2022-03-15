import { Mascota } from './../../../../modelos/mascota';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit {
  mascota:Mascota = new Mascota();
  pet:any={}

  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.verMascota()
    console.log(sessionStorage.getItem("MascotaID"))
  }
  verMascota(){
    this.api.getMascota().subscribe(data=>{
      this.pet=data;
      this.mascota=this.pet;
      console.log(this.mascota);
    })
  }
  eliminar():void{
    this.api.eliminarMascota().subscribe();
    console.log("Mascota eliminado")
    alert("mascota eliminada exitosamente.");
    location.href="/adminMascotas"
  }

}
