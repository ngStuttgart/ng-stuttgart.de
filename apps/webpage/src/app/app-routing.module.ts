import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/home').then(
        m => m.WebpageFeatureHomeModule
      )
  },
  {
    path: 'team',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/team').then(
        m => m.WebpageFeatureTeamModule
      )
  },
  {
    path: 'join',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/join').then(
        m => m.WebpageFeatureJoinModule
      )
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('@ng-stuttgart/webpage/feature/archive').then(
        m => m.WebpageFeatureArchiveModule
      )
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
