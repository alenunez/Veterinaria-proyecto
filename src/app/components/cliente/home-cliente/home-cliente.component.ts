import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {
  usuario:Usuario=new Usuario();
  user:any

  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.verUsuario();
  }

  verUsuario(){
    this.api.getUsuarioLogueado().subscribe(data=>{
      this.user=data;
      this.usuario=this.user;
    })
  }

}
