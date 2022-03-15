import { VerMascotaComponent } from './components/admin/admin-mascotas/ver-mascota/ver-mascota.component';
import { CrearMascotaComponent } from './components/admin/admin-mascotas/crear-mascota/crear-mascota.component';
import { VerUsuarioComponent } from './components/admin/admin-usuarios/ver-usuario/ver-usuario.component';
import { CrearUsuarioComponent } from './components/admin/admin-usuarios/crear-usuario/crear-usuario.component';
import { AdminMascotasComponent } from './components/admin/admin-mascotas/admin-mascotas.component';
import { AdminCitasComponent } from './components/admin/admin-citas/admin-citas.component';
import { VeterinarioCitasComponent } from './components/veterinario/veterinario-citas/veterinario-citas.component';
import { VeterinarioMascotasComponent } from './components/veterinario/veterinario-mascotas/veterinario-mascotas.component';
import { VeterinarioClientesComponent } from './components/veterinario/veterinario-clientes/veterinario-clientes.component';
import { SolicitarCitaClienteComponent } from './components/cliente/solicitar-cita-cliente/solicitar-cita-cliente.component';
import { CitasClienteComponent } from './components/cliente/citas-cliente/citas-cliente.component';
import { MascotasComponent } from './components/cliente/mascotas/mascotas.component';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { HomeVeterinarioComponent } from './components/veterinario/home-veterinario/home-veterinario.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ServicesComponent } from './components/services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { AdminUsuariosComponent } from './components/admin/admin-usuarios/admin-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'galery',
    component: GaleryComponent
  },
  {
    path: 'homeAdmin',
    component: HomeAdminComponent
  },
  {
    path: 'homeVeterinario',
    component: HomeVeterinarioComponent
  },
  {
    path: 'homeCliente',
    component: HomeClienteComponent    
  },
  {
    path: 'clienteMascota',
    component: MascotasComponent    
  },
  {
    path: 'citasCliente',
    component: CitasClienteComponent   
  }
  ,
  {
    path: 'solicitarCitaCliente',
    component: SolicitarCitaClienteComponent  
  }
  ,
  {
    path: 'veterinarioClientes',
    component: VeterinarioClientesComponent  
  }  ,
  {
    path: 'veterinarioMascotas',
    component: VeterinarioMascotasComponent
  }  ,
  {
    path: 'veterinarioCitas',
    component: VeterinarioCitasComponent  
  }
  ,
  {
    path: 'adminUsuarios',
    component: AdminUsuariosComponent  
  }
  ,
  {
    path: 'adminCitas',
    component: AdminCitasComponent 
  } ,
  {
    path: 'adminMascotas',
    component: AdminMascotasComponent  
  }
  ,
  {
    path: 'adminCrearUsuario',
    component: CrearUsuarioComponent  
  }
  ,
  {
    path: 'adminVerUsuario',
    component: VerUsuarioComponent  
  }
  ,
  {
    path: 'adminCrearMascota',
    component: CrearMascotaComponent 
  }
  ,
  {
    path: 'adminVerMascota',
    component: VerMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
