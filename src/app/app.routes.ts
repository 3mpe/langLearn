import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RedirectGuard } from './auth/redirect.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [RedirectGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
];
