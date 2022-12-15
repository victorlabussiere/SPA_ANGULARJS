import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { EditPictureComponent } from './components/pages/edit-picture/edit-picture.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewPictureComponent } from './components/pages/new-picture/new-picture.component';
import { PictureComponent } from './components/pages/picture/picture.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "mypics/new", component: NewPictureComponent },
  { path: "mypics/:id/edit", component: EditPictureComponent },
  { path: "mypics/:id", component: PictureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
