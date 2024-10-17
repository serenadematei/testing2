import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton],
})
export class Tab1Page {

  constructor(private router: Router) {}
  logout() {
  const auth = getAuth();
  signOut(auth).then(() => {
    this.router.navigate(['/login']);
  }).catch((error) => {
    console.error('Error al cerrar sesión:', error);
  });
}
}

