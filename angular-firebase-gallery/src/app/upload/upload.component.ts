import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash'; // to help loop over files more succinctly

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files : FileList;
  upload: Upload;
  

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  handleFiles(event) {
    console.log(event.target.files);
    this.files =  event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    // console.log(filesToUpload);
    const filesIdx = _.range(filesToUpload.length);
    // console.log("filesIdx is: ", filesIdx);
    _.each(filesIdx, (index) => {
      // each log will print out the each file infor in the array filesToUpload 
      console.log(filesToUpload[index]);
      this.upload = new Upload(filesToUpload[index]);
      this.uploadService.uploadFile(this.upload);
    });



  }

}// end of export class
