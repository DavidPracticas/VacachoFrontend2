import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LoginComponent } from './components/login/login.component';
import { ListaRutasComponent } from './components/lista-rutas/lista-rutas.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaAdminsComponent } from './components/lista-admins/lista-admins.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModalTerminosComponent } from './components/modal-terminos/modal-terminos.component';
import { ModalUsuarioComponent } from './components/modal-usuario/modal-usuario.component';
import { RegistroAdmComponent } from './components/registro-adm/registro-adm.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista-rutas', component: ListaRutasComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'lista-admins', component: ListaAdminsComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-adm', component: RegistroAdmComponent },
  { path: 'edit-registro/:id', component: RegistroComponent },
  { path: 'modal-terminos', component: ModalTerminosComponent },
  { path: 'modal-usuario', component: ModalUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
