import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listUsuarios: Usuario [] = []; //Usuarios de models
  ROL = 'Administrador';

  constructor(private _usuariosService: UsuarioService){}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuariosService.getUsuarios().subscribe(data => {
      //console.log("Todo Bien");
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    }
  )}

  eliminarUsuario(id:any){
    this._usuariosService.deleteUsuario(id).subscribe(data =>{
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    }
  )}

  editarUsuario(id:any){
    this._usuariosService.deleteUsuario(id).subscribe(data =>{
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    }
  )}


}
