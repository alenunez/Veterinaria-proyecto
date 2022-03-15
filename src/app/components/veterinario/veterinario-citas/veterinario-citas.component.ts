import { Component, OnInit } from '@angular/core';
import { CitaMedica } from 'src/app/modelos/citaMedica';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-veterinario-citas',
  templateUrl: './veterinario-citas.component.html',
  styleUrls: ['./veterinario-citas.component.css']
})
export class VeterinarioCitasComponent implements OnInit {
  citas: any = [];
  cita: CitaMedica = new CitaMedica();
  idUsuarioSesion = localStorage.getItem("idUsuarioSesion")
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
  verCita(parametro:any) { 
    this.cita=parametro
    console.log(this.cita.usuario.nombres)
    location.href="/veterinarioVerCitas"
    sessionStorage.setItem('CitaID',JSON.stringify( this.cita.idCita))
    //this.api.setProductosWishList(this.producto.idproducto,this.producto);
  }

}
