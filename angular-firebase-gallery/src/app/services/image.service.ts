import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Firebase:
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';
// Model  
import { GalleryImage } from '../models/galleryimage.model';

@Injectable()
export class ImageService {

  private uid : string;


  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) 
  {
      this.afAuth.authState.subscribe(auth => {
        if(auth !== undefined && auth !== null){
          // auth.uid return back to us will be stored into our uid string
          this.uid = auth.uid;
        }
      });
  }

  getImages(): Observable<GalleryImage[]> {
    // all of our images will be under the uploads parent or folder
    // return this.db.list('uploads').valueChanges();
    const test = this.db.list('uploads').valueChanges();
    // console.log("In image service: "+test);
    return test;
  } 
  
  
}


// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseApp } from 'angularfire2';
// import 'firebase/storage';
// import { GalleryImage } from '../models/galleryImage.model';
// import * as firebase from 'firebase';

// @Injectable()
// export class ImageService {
//   private uid: string;

//   constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
//     this.afAuth.authState.subscribe(auth => {
//       if (auth !== undefined && auth !== null) {
//         this.uid = auth.uid;
//       }
//     });
//   }

//   getImages(): Observable<GalleryImage[]> {
//     return this.db.list('uploads').valueChanges();
//   }

//   getImage(key: string) {
//     return firebase.database().ref('uploads/' + key).once('value')
//     .then((snap) => snap.val());
//   }
// }