import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PoModule } from '@portinari/portinari-ui';
import { PoPageLoginModule } from '@portinari/portinari-templates';
import { PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
