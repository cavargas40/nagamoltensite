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
import { GuildMembersComponent } from './components/guild-members/guild-members.component';

//services
import { WowtokenService } from './services/wowtoken.service';
import { WowrealmstatusService } from './services/wowrealmstatus.service';
import { GuildMembersService } from './services/guild-members.service';

//errorhandlers
import { AppError } from './util/app-error';
import { IndexComponent } from './components/pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WowtokenComponent,
    WowrealmstatusComponent,
    DummyTestsComponent,
    GuildMembersComponent,    
    IndexComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule   
  ],
  providers: [WowtokenService, WowrealmstatusService, AppError],
  bootstrap: [AppComponent]
})
export class AppModule { }
