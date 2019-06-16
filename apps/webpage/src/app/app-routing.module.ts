import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'join',
    loadChildren: () => import('./join/join.module').then(m => m.JoinModule)
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('./archive/archive.module').then(m => m.ArchiveModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
