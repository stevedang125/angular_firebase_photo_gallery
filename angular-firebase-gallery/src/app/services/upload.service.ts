import { Injectable } from '@angular/core';
import { Upload } from '../models/upload.model';

import { AngularFireModule } from 'angularfire2';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject, snapshotChanges } from 'angularfire2/database';

import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  
  private basePath = '/uploads';
  private uploads : AngularFireList<GalleryImage[]>;

  constructor(private ngFire: AngularFireModule,
              private db : AngularFireDatabase) { }

  uploadFile(upload: Upload){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
    .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED ,
    // Three observers
    // 1) State_changed observer
    (snapshot) => {
      //upload in progress
      upload.progress = 
      (uploadTask.snapshot.bytesTransferred 
        / uploadTask.snapshot.totalBytes ) * 100;
      console.log(upload.progress);
    },
    // 2) error observer
    (err) => {
      // upload failed
      console.log('Upload failed, here is the errror: ', err);
    },
    // 3) success observer
    (): any => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
    });
  }// end of uploadFile method/function 

  private saveFileData(upload: Upload) {
  
    firebase.database().ref('/uploads/').push(upload);
    // this.db.list(`${this.basePath}/`).push(upload);
    console.log('Files saved!: '+ upload.url);
  }

}
