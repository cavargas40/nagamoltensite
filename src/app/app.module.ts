import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './_config/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { WowtokenComponent } from './wowtoken/wowtoken.component';
import { WowtokenService } from './wowtoken.service';
import { WowrealmstatusComponent } from './wowrealmstatus/wowrealmstatus.component';
import { DummyTestsComponent } from './dummy-tests/dummy-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WowtokenComponent,
    WowrealmstatusComponent,
    DummyTestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule    
  ],
  providers: [WowtokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
