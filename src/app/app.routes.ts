import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { Tab1Page } from './tab1/tab1.page';
import { RegistroPage } from './registro/registro.page';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'tabs/tab1', component: Tab1Page },
  { path: 'registro',component: RegistroPage},
];