import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InComponent } from './auth/sign/in/in.component';
import { UpComponent } from './auth/sign/up/up.component';
import { NotfoundComponent } from './error/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    InComponent,
    UpComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
