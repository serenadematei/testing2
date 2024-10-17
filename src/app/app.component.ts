import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private router: Router, private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.router.navigate(['/tabs/tab1']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
