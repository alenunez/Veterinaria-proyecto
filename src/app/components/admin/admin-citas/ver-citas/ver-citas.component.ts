import { CitaMedica } from './../../../../modelos/citaMedica';
import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent implements OnInit {
  mascota:Mascota = new Mascota();
  pet:any={}
  citaMedica:CitaMedica= new CitaMedica();
  cita:any={}
  constructor(private api:AdminServiceService) { }


  ngOnInit(): void {
    this.verCita()
    console.log(sessionStorage.getItem("CitaID"))
  }
  verCita(){
    this.api.getCita().subscribe(data=>{
      this.cita=data;
      this.citaMedica=this.cita;
      console.log(this.citaMedica);
    })
  }
  eliminar():void{
    this.api.eliminarCita().subscribe();
    alert("cita eliminada exitosamente.");
    location.href="/adminCitas"
  }

}
