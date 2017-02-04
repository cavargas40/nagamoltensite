import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

//modules
import { AppRoutingModule } from './util/app-routing.module';
import { DataTableModule } from "angular2-datatable";

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
import { WowtokenService, WowrealmstatusService, GuildMembersService, MaterializeService, Auth } from './services';

//utilities
import { AppError, Utilities } from './util/';

//pipes
import { SafePipe } from './pipes/safe.pipe'
import { MemberFilterPipe } from './pipes/member-filter.pipe';

//external librarys
import { MaterializeModule } from 'angular2-materialize';
import { RecruitmentComponent } from './components/pages/recruitment/recruitment.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateaccountComponent } from './components/pages/createaccount/createaccount.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { AccountComponent } from './components/pages/account/account.component';
import { HomeComponent } from './components/pages/account/home/home.component';
import { ProfileComponent } from './components/pages/account/profile/profile.component';

//guards
import { Auth0Guard } from './guards/';
import { MemFunctFilterPipe } from './pipes/mem-funct-filter.pipe';


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
    HomeComponent,
    ProfileComponent,
    MemberFilterPipe,
    MemFunctFilterPipe    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [
    WowtokenService,
    WowrealmstatusService,
    AppError,
    GuildMembersService,
    Auth,
    AUTH_PROVIDERS,
    Auth0Guard,
    MaterializeService
    // AlertService,
    // AuthenticationService,
    // AuthGuard,
    // UserService
    //,    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
