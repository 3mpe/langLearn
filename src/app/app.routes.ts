import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
];
