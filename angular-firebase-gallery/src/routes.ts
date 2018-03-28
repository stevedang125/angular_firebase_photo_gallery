import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthGuardService } from './app/services/auth-guard.service';


export const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuardService]},
    {path: 'upload', component: UploadComponent, canActivate: [AuthGuardService]},
    {path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthGuardService]},
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
];

