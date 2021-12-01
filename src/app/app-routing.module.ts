import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopicsComponent } from './components/topics/topics.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'topics',
    component: TopicsComponent,
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
