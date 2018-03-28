// Module: Import array
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import Module array
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components: Declareation array
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

// Services: Provider array
import { AuthService } from './services/auth.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { AuthGuardService } from './services/auth-guard.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment'; 

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, ImageService, UploadService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
