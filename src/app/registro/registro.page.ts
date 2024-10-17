import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonText} from '@ionic/angular/standalone';
import { AuthService } from '../auth.service';
import { AuthErrorCodes } from 'firebase/auth';
import { Router } from '@angular/router';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonCard, IonCardHeader, IonCardContent, IonItem, IonCardTitle, IonText],
  providers: [AuthService]
})
export class RegistroPage implements OnInit {

  user = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService,  private router: Router, private firestore : Firestore) {}
  
  ngOnInit() {
    
  }

  registrarse() {

    let col = collection(this.firestore, 'registros');

    this.authService.crearUsuario(this.user.email, this.user.password).then((res) => {
      if (res.user.email !== null) {
        this.user.email = res.user.email;
        this.router.navigate(['/home']);
        addDoc(col, { "date": new Date(), "usuario": this.user.email});
        this.authService.guardarUsuario(this.user.email);
      }

    }).catch((e) => {
      console.log(e);
      if (e.code === AuthErrorCodes.EMAIL_EXISTS) {
        this.errorMessage = 'La dirección de correo ya fue utilizada. Por favor, ingrese otra. ';
      } else {
        this.errorMessage = 'Ocurrió un error durante el registro. Por favor, intente de nuevo. ';
      }
    });
  }

}
