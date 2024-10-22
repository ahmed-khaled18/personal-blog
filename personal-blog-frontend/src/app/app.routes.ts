import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./ui/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./ui/admin/admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./ui/user/user.routes').then((m) => m.userRoutes),
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
];
