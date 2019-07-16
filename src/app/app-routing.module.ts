import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'documentation', component: DocumentationComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],  
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor (private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }
}
