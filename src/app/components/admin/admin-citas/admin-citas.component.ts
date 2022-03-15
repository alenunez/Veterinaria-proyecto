import { CitaMedica } from './../../../modelos/citaMedica';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-citas',
  templateUrl: './admin-citas.component.html',
  styleUrls: ['./admin-citas.component.css']
})
export class AdminCitasComponent implements OnInit {
  citas: any = [];
  cita: CitaMedica = new CitaMedica();
  constructor(private api: AdminServiceService) { }

  ngOnInit(): void {
    this.getCitas();
  }
  getCitas(){
    this.api.getCitas().subscribe(data=>{
      this.citas=data;
      console.log(this.citas)
    }) 
  }
  crearCita() { 
    location.href="/adminCrearCita"
  }
  verUsuario() { }

}
