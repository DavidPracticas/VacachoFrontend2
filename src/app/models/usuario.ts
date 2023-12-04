export class Usuario{
  _id?:number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  permisoAdm?: boolean;

  constructor(nombre: string, apellido: string, email: string, password: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password= password;
  }
}

export class UsuarioLog{
  _id?:number;
  email: string;
  password: string;
  permisoAdm?: boolean;

  constructor(email: string, password: string){
    this.email = email;
    this.password= password;
  }
}
