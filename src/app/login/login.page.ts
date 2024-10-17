import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthErrorCodes } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonText, FormsModule, NgIf],
  providers: [AuthService]
})
export class LoginPage implements OnInit {

  user = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService,  private router: Router) {}
  
  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.router.navigate(['/tabs/tab1']);
      }
    });
  }

  login() {
    this.authService.logIn(this.user.email, this.user.password)
      .then((res) => {
        this.router.navigate(['/tabs/tab1']);
      })
      .catch((e) => {
        if (e.code === AuthErrorCodes.INVALID_EMAIL || e.code === AuthErrorCodes.USER_DELETED) {
          this.errorMessage = 'El correo ingresado no es válido. Por favor, inténtelo de nuevo';
        } else {
          this.errorMessage = 'Usuario o contraseña incorrecta. Por favor, inténtelo de nuevo';
        }
      });
  }


}
