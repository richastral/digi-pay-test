import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { cardOutline } from 'ionicons/icons';
import { analyticsOutline } from 'ionicons/icons';
import { peopleOutline } from 'ionicons/icons';
import { cogOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, CommonModule, FormsModule, RouterModule]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({ cardOutline, analyticsOutline, peopleOutline, cogOutline });
  }

  ngOnInit() {
  }

}
