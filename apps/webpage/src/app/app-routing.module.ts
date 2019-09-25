import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/home').then(
        m => m.WebpageFeatureHomeModule
      ),
    data: { animation: 'Home' }
  },
  {
    path: 'team',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/team').then(
        m => m.WebpageFeatureTeamModule
      ),
    data: { animation: 'Team' }
  },
  {
    path: 'join',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/join').then(
        m => m.WebpageFeatureJoinModule
      ),
    data: { animation: 'Join' }
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/archive').then(
        m => m.WebpageFeatureArchiveModule
      ),
    data: { animation: 'Archive' }
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
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
