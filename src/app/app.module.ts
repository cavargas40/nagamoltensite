import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';

//routing
import { AppRoutingModule } from './util/app-routing.module';

//app components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WowtokenComponent } from './components/wowtoken/wowtoken.component';
import { WowrealmstatusComponent } from './components/wowrealmstatus/wowrealmstatus.component';
import { DummyTestsComponent } from './components/dummy-tests/dummy-tests.component';

//services
import { WowtokenService } from './services/wowtoken.service';
import { WowrealmstatusService } from './services/wowrealmstatus.service';
import { GuildMembersService } from './services/guild-members.service';

//errorhandlers
import { AppError } from './util/app-error';
import { IndexComponent } from './components/pages/index/index.component';
import { MembersComponent } from './components/pages/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WowtokenComponent,
    WowrealmstatusComponent,
    DummyTestsComponent,        
    IndexComponent, 
    MembersComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule   
  ],
  providers: [WowtokenService, WowrealmstatusService, AppError, GuildMembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
