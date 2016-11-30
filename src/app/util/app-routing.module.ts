import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//paginas
import { IndexComponent } from '../components/pages/index/index.component';

//tests
import { DummyTestsComponent } from '../components/dummy-tests/dummy-tests.component'

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio',  component: IndexComponent  },  
  { path: 'dummy', component: DummyTestsComponent}
  //   { path: 'detail/:id', component: HeroDetailComponent },
  //   { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }