import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
providedIn: 'root'
})

export class AuthService {
    public user$: Observable<User>;
// Fire
constructor(){}
// private router: Router,
// Fire
// public afAuth: AngularFireAuth, private afs: AngularFirestore
// ) {
//     this.user$ = this.afAuth.authState.pipe(
//         switchMap((user) => {
//           if (user) {
//             return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
//           }
//           return of(null);
//         })
//       );
// }

// async loginGoogle(): Promise<User> {
//     try {
//       const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//       this.updateUserData(user);
//       return user;
//     } catch (error) {
//       console.log('Error->', error);
//     }
//   }

//   private updateUserData(user: User) {
//     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

//     const data: User = {
//       uid: user.uid,
//       email: user.email,
//       photoURL: user.photoURL,
//       displayName: user.displayName,
//     };

//     return userRef.set(data, { merge: true });
//   }
}
