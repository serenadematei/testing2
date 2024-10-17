/*import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';*/

/*import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private auth: Auth, private firestore: Firestore) {}

  crearUsuario(email: string, clave: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, clave);
  }

  logIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  guardarUsuario(email: string) {
    localStorage.setItem("usuarios", email);
    const col = collection(this.firestore, 'registros');
    return addDoc(col, { "date": new Date(), "usuario": email });
  }
}

  /*
  private auth: Auth;

  constructor() {
    this.auth =  getAuth(); 
  }

  crearUsuario(email: string, clave: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, clave);
  }

  logIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  /*
  guardarUsuario(email: string) {
    localStorage.setItem("usuarios", email);
  }*
  */


    import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  crearUsuario(email: string, clave: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, clave);
  }

  logIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  guardarUsuario(email: string) {
    localStorage.setItem("usuarios", email);
    const col = collection(this.firestore, 'registros');
    return addDoc(col, { "date": new Date(), "usuario": email });
  }
}
