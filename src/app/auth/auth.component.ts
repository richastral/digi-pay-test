import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonRouterOutlet, IonContent],
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
