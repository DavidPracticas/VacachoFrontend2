import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario, UsuarioLog } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuildrer: FormBuilder,
    private _loginService: LoginService
  ) {
    this.loginForm = this.formBuildrer.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  //Captura de datos validos del login

  iniciar(){

    const USUARIO : UsuarioLog = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }


    this._loginService.autentificarUsuario(USUARIO).subscribe(data => {
      console.log("Se ingreso corrctamente");
      console.log(USUARIO);
    },error =>{
      console.log("El error esta en autentificarUsuario")
      console.log(error);
    })
    console.log(USUARIO);
    if (USUARIO.permisoAdm==false){
      this.router.navigate(['/lista-rutas']);
    }

  }

}
