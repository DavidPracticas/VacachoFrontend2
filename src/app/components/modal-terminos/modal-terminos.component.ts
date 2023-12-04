import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal-terminos',
  templateUrl: './modal-terminos.component.html',
  styleUrls: ['./modal-terminos.component.css']
})
export class ModalTerminosComponent implements OnInit{

  constructor(private ModalSwitch: ModalService  ){}

  ngOnInit(): void {
  }

  cerrarModal(){
    this.ModalSwitch.ModalSwitch.emit(false);
  }
}
