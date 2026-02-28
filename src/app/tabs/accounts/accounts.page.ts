import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonCardSubtitle,
  IonIcon,
  IonButton,
  IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOffOutline, add } from 'ionicons/icons';
import { sendOutline } from 'ionicons/icons';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonIcon,
    IonCardSubtitle,
    IonButton,
    IonButtons,
    RouterModule
  ],
})
export class AccountsPage implements OnInit {
  cards = [
    {
      title: 'Checking Account',
      subtitle: '**** 1234',
      imageUrl: 'assets/icon/favicon.png',
      content: 'Your primary checking account for daily transactions.',
    },
    {
      title: 'Checking Account',
      subtitle: '**** 1234',
      imageUrl: 'assets/icon/favicon.png',
      content: 'Your primary checking account for daily transactions.',
    },
    {
      title: 'Checking Account',
      subtitle: '**** 1234',
      imageUrl: 'assets/icon/favicon.png',
      content: 'Your primary checking account for daily transactions.',
    },
  ];

  constructor() {
    addIcons({ add, eyeOffOutline, sendOutline });
  }

  ngOnInit() {}
}
