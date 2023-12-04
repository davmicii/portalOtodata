import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InComponent} from './auth/sign/in/in.component';
import { UpComponent } from './auth/sign/up/up.component';
import { NotfoundComponent } from './error/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'auth/sign',
    children:[
      { path: 'in', component: InComponent},
      { path: 'up', component: UpComponent},
      { path: '', redirectTo: 'auth/sign/in', pathMatch: 'full' },
    ],
  },
  {path: '**', redirectTo: 'auth/sign/in'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
