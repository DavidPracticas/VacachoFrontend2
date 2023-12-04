import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListaRutasComponent } from './components/lista-rutas/lista-rutas.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaAdminsComponent } from './components/lista-admins/lista-admins.component';
import { ModalTerminosComponent } from './components/modal-terminos/modal-terminos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModalUsuarioComponent } from './components/modal-usuario/modal-usuario.component';
import { RegistroAdmComponent } from './components/registro-adm/registro-adm.component';
import { RegistroEditarComponent } from './components/registro-editar/registro-editar.component';
import { NgxPayPalModule } from 'ngx-paypal';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaRutasComponent,
    ListaUsuariosComponent,
    ListaAdminsComponent,
    ModalTerminosComponent,
    RegistroComponent,
    ModalUsuarioComponent,
    RegistroAdmComponent,
    RegistroEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
