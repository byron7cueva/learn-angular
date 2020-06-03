import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
// Servicio de mensajeria
import { AngularFireMessaging } from '@angular/fire/messaging';
//
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface Token {
  token: string;
}

// Este archivo se encarga de la logica del componente
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Indica que archivo html va renderizar el componente
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Nombre de los estilos asociado
})
export class AppComponent implements OnInit {

  private tokensCollection: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private afm: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    // Inicializando la coleccion y asignandole el nombre de tokens
    this.tokensCollection = this.database.collection<Token>('tokens');
  }

  ngOnInit() {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA() {
    // Indicar que este pendiente si hay una nueva version de la aplicacion
    this.swUpdate.available
    .subscribe(value => {
      console.log('update', value);
      // Haciendo una reload si hay una nueva version
      window.location.reload();
    });
  }

  // Metodo para solicitar al usuario permiso de recibir notificaciones
  requestPermission() {
    this.afm.requestToken
    .subscribe(token => {
      // Este token permite diferenciar a firebase al dispositivo para enviar una notificacion
      console.log(token);
      this.tokensCollection.add({
        token
      });
    });
  }

  listenNotifications() {
    /*this.afm.messages
    .subscribe(message => {
      // Aqui se recibe el mensaje
      console.log(message);
    });*/
    this.afm.onMessage(payload => {
      console.log(payload);
    });
  }
}
