import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-ver-mascotas-vet',
  templateUrl: './ver-mascotas-vet.component.html',
  styleUrls: ['./ver-mascotas-vet.component.css']
})
export class VerMascotasVetComponent implements OnInit {
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


}
