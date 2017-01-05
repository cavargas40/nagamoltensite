import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

//modules
import { AppRoutingModule } from './util/app-routing.module';
//import { Ng2PaginationModule } from 'ng2-pagination';

//app components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WowtokenComponent } from './components/wowtoken/wowtoken.component';
import { WowrealmstatusComponent } from './components/wowrealmstatus/wowrealmstatus.component';
import { DummyTestsComponent } from './components/dummy-tests/dummy-tests.component';
import { IndexComponent } from './components/pages/index/index.component';
import { MembersComponent } from './components/pages/members/members.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';

//services
// import { WowtokenService } from './services/wowtoken.service';
// import { WowrealmstatusService } from './services/wowrealmstatus.service';
// import { GuildMembersService } from './services/guild-members.service';
// import { AlertService } from './services/alert.service';
// import { AuthenticationService } from './services/authentication.service';
import {  /* UserService, */  WowtokenService, WowrealmstatusService, GuildMembersService /*, AlertService, AuthenticationService*/ } from './services';

//errorhandlers
import { AppError } from './util/app-error';

//pipes
//import { FilterLvlMembersPipe } from './util/pipes/filter-lvl-members.pipe';
import { SafePipe } from './util/pipes/safe.pipe'

//external librarys
import { MaterializeModule } from 'angular2-materialize';
import { RecruitmentComponent } from './components/pages/recruitment/recruitment.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateaccountComponent } from './components/pages/createaccount/createaccount.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { AccountComponent } from './components/pages/account/account.component';
import { HomeComponent } from './components/pages/account/home/home.component';
//import { AlertComponent } from './directives/';

//guards
//import { AuthGuard } from './guards/';

//fackebackend
// import { fakeBackendProvider } from './util';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WowtokenComponent,
    WowrealmstatusComponent,
    DummyTestsComponent,
    IndexComponent,
    MembersComponent,
    ScheduleComponent,
    RecruitmentComponent,
    LoginComponent,
    CreateaccountComponent,
    ForgotpasswordComponent,
    SafePipe,
    NotfoundComponent,
    AccountComponent,
    HomeComponent
    //,AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    //Ng2PaginationModule,
    AppRoutingModule
  ],
  providers: [
    WowtokenService,
    WowrealmstatusService,
    AppError,
    GuildMembersService,
    // AlertService,
    // AuthenticationService,
    // AuthGuard,
    // UserService
    //,    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
