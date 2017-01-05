import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//paginas
import { IndexComponent } from '../components/pages/index/index.component';
import { MembersComponent } from '../components/pages/members/members.component';
import { ScheduleComponent } from '../components/pages/schedule/schedule.component';
import { RecruitmentComponent } from '../components/pages/recruitment/recruitment.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { CreateaccountComponent } from '../components/pages/createaccount/createaccount.component';
import { ForgotpasswordComponent } from '../components/pages/forgotpassword/forgotpassword.component';
import { NotfoundComponent } from '../components/pages/notfound/notfound.component';
import { AccountComponent } from '../components/pages/account/account.component';

//authentication guard
//import { AuthGuard } from '../guards/';

//tests
import { DummyTestsComponent } from '../components/dummy-tests/dummy-tests.component'

const routes: Routes = [
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '', component: IndexComponent },
  { path: 'members', component: MembersComponent },

  { path: 'calendar', component: ScheduleComponent },

  { path: 'recruitment', component: RecruitmentComponent },
  { path: 'dummy', component: DummyTestsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  //{ path: 'account', component:  AccountComponent, canActivate: [AuthGuard]},
  { path: 'notfound', component: NotfoundComponent },
  { path: '*path', redirectTo: '/notfound' },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }