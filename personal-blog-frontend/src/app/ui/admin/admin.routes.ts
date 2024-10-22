import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin-blogs',
    pathMatch: 'full',
  },
  {
    path: 'admin-blogs',
    loadComponent: () =>
      import('./pages/admin-blogs/admin-blogs.component').then(
        (m) => m.AdminBlogsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'create-blog',
    loadComponent: () =>
      import('./pages/create-blog/create-blog.component').then(
        (m) => m.CreateBlogComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-blog',
    loadComponent: () =>
      import('./pages/edit-blog/edit-blog.component').then(
        (m) => m.EditBlogComponent
      ),
    canActivate: [AuthGuard],
  },
];
