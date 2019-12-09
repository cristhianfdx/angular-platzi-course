import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  createUser(email: string, password: string): Promise<auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  hasUser(): Observable<any> {
    return this.afAuth.authState;
  }
}
