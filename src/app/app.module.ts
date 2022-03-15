import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { HomeVeterinarioComponent } from './components/veterinario/home-veterinario/home-veterinario.component';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { MascotasComponent } from './components/cliente/mascotas/mascotas.component';
import { MenuClienteComponent } from './components/cliente/menu-cliente/menu-cliente.component';
import { CitasClienteComponent } from './components/cliente/citas-cliente/citas-cliente.component';
import { SolicitarCitaClienteComponent } from './components/cliente/solicitar-cita-cliente/solicitar-cita-cliente.component';
import { MenuVeterinarioComponent } from './components/veterinario/menu-veterinario/menu-veterinario.component';
import { VeterinarioClientesComponent } from './components/veterinario/veterinario-clientes/veterinario-clientes.component';
import { VeterinarioMascotasComponent } from './components/veterinario/veterinario-mascotas/veterinario-mascotas.component';
import { VeterinarioCitasComponent } from './components/veterinario/veterinario-citas/veterinario-citas.component';
import { AdminUsuariosComponent } from './components/admin/admin-usuarios/admin-usuarios.component';
import { AdminCitasComponent } from './components/admin/admin-citas/admin-citas.component';
import { AdminMascotasComponent } from './components/admin/admin-mascotas/admin-mascotas.component';
import { MenuAdminComponent } from './components/admin/menu-admin/menu-admin.component';
import { CrearUsuarioComponent } from './components/admin/admin-usuarios/crear-usuario/crear-usuario.component';
import { VerUsuarioComponent } from './components/admin/admin-usuarios/ver-usuario/ver-usuario.component';
import { CrearMascotaComponent } from './components/admin/admin-mascotas/crear-mascota/crear-mascota.component';
import { FilterPipe } from './pipes/filter.pipe';
import { VerMascotaComponent } from './components/admin/admin-mascotas/ver-mascota/ver-mascota.component';
import { CrearCitaComponent } from './components/admin/admin-citas/crear-cita/crear-cita.component';
import { FilterMascotaPipe } from './pipes/filter-mascota.pipe';
import { VerCitasComponent } from './components/admin/admin-citas/ver-citas/ver-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ServicesComponent,
    DoctorsComponent,
    ContactComponent,
    GaleryComponent,
    HomeAdminComponent,
    HomeVeterinarioComponent,
    HomeClienteComponent,
    MascotasComponent,
    MenuClienteComponent,
    CitasClienteComponent,
    SolicitarCitaClienteComponent,
    MenuVeterinarioComponent,
    VeterinarioClientesComponent,
    VeterinarioMascotasComponent,
    VeterinarioCitasComponent,
    AdminUsuariosComponent,
    AdminCitasComponent,
    AdminMascotasComponent,
    MenuAdminComponent,
    CrearUsuarioComponent,
    VerUsuarioComponent,
    CrearMascotaComponent,
    FilterPipe,
    VerMascotaComponent,
    CrearCitaComponent,
    FilterMascotaPipe,
    VerCitasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
