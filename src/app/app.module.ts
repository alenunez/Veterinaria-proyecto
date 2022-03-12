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
