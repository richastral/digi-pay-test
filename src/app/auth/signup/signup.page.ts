import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel, IonButton, IonFooter, IonCheckbox } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { compassOutline } from 'ionicons/icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
    IonFooter,
    IonCheckbox,
    ReactiveFormsModule,
  ],
})
export class SignupPage implements OnInit {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    addIcons({ compassOutline });
    this.accountForm = this.fb.group({
      agree: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {}
}
