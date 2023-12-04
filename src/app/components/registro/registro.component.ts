import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  modalSwitch: boolean = false;
  usuarioForm: FormGroup;

  titulo = 'Crear Usuario';


  constructor(
    private router : Router,
    private fb : FormBuilder,
    private _usuario: UsuarioService,
    private SwitchModal:ModalService,
    private aRouter: ActivatedRoute
    ){

    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8), this.validatePassword.bind(this)]]
    })

  }

  ngOnInit(): void{
    this.SwitchModal.ModalSwitch.subscribe((valor)=>{this.modalSwitch=valor});

  }

  //abre modal terminos y condiciones
  modalTerminos(){
    this.modalSwitch = true ;
  }

  agregarUsuario(){

    //Transforma a un objeto para llevarlo a la api
    const USUARIO : Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value
    }

    this._usuario.crearUsuario(USUARIO).subscribe(data => {
      console.log("Se agrego con exito a la base de datos");
      console.log(USUARIO);
    },error =>{
      console.log("El error esta en crearUsuario");
      this.usuarioForm.reset();
      console.log(error);
    })
  }

  //Conjunto de validaciones de contraseña
  validatePassword(control: AbstractControl) {
    const password = control.value;

    // Validar al menos una mayúscula
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      return { uppercaseRequired: true };
    }

    // Validar al menos una minúscula
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      return { lowercaseRequired: true };
    }

    // Validar que no tenga números consecutivos
    for (let i = 0; i < password.length - 1; i++) {
      if (parseInt(password[i], 10) + 1 === parseInt(password[i + 1], 10)) {
        return { consecutiveNumbers: true };
      }
    }

    // Validar que tenga al menos un carácter especial
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-]/;
    if (!specialCharacterRegex.test(password)) {
      return { specialCharacterRequired: true };
    }

    return null; // La contraseña es válida
  }

}
