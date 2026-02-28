import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel, IonButton, IonFooter, IonCheckbox, IonTextarea } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { compassOutline } from 'ionicons/icons';

@Component({
  selector: 'app-import',
  templateUrl: './import.page.html',
  styleUrls: ['./import.page.scss'],
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
    IonTextarea,
    ReactiveFormsModule,
  ],
})
export class ImportPage implements OnInit {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    addIcons({ compassOutline });
    this.accountForm = this.fb.group({
      mnemonic: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
