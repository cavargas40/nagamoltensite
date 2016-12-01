import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//paginas
import { IndexComponent } from '../components/pages/index/index.component';
import { MembersComponent } from '../components/pages/members/members.component';

//tests
import { DummyTestsComponent } from '../components/dummy-tests/dummy-tests.component'

const routes: Routes = [
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '',  component: IndexComponent  },  
  { path: 'members', component: MembersComponent},
  { path: 'dummy', component: DummyTestsComponent}
  //   { path: 'detail/:id', component: HeroDetailComponent },
  //   { path: 'heroes',     component: HeroesComponent }
  //{path: '/404', name: 'NotFound', component: NotFoundComponent},
  //{path: '/*path', redirectTo: ['NotFound']}
  //{path: '/**', redirectTo: ['NotFound']}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }