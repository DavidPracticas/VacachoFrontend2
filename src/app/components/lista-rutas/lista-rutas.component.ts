import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { RutaService } from 'src/app/services/ruta.service';
import { Ruta } from 'src/app/models/ruta';

@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit{


constructor(private _rutasService: RutaService){ }

ngOnInit(): void {
  this.obtenerRutas();
  this.initConfig();
}

//Metodos para api de camiones

listRutas: Ruta [] = []; //Ruta Models
obtenerRutas(){
  this._rutasService.getRutas().subscribe (data => {
    console.log(data);
    this.listRutas = data;
  }, error => {
    console.log(error)
  })
}

crearRutas(){
  this._rutasService.getRutas().subscribe (data => {
    console.log(data);
  }, error => {
    console.log(error)
  })
}

//Metodos para api de PAYPAL

public payPalConfig ? : IPayPalConfig;

initConfig(): void {
  this.payPalConfig = {
      currency: 'MXN',
      clientId: 'Ab6sx_ucNMEYIN3S0yHvkZmnfDZrzjUsbTU2cPmVTbgYXqqBb_rRVjLyC3UqhEA0dzcyApgjoq2Baa7N',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'MXN',
                  value: '50.00',
                  breakdown: {
                      item_total: {
                          currency_code: 'MXN',
                          value: '50.00'
                      }
                  }
              },
              items: [{
                  name: 'Boleto',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'MXN',
                      value: '50.00',
                  },
              }]
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then((details: any) => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
      },
      onError: err => {
          console.log('OnError', err);
      },
      onClick: (data, actions) => {
          console.log('onClick', data, actions);
      }
  };
}

}
