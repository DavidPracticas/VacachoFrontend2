import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-admins',
  templateUrl: './lista-admins.component.html',
  styleUrls: ['./lista-admins.component.css']
})
export class ListaAdminsComponent implements OnInit {
  listUsuarios: Usuario [] = []; //Usuarios de models

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


  btnAgragarAdm(){
    console.log('xD')
  }

}
