import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'blogs',
    pathMatch: 'full',
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./pages/blogs/blogs.component').then((m) => m.BlogsComponent),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./pages/single-blog/single-blog.component').then(
        (m) => m.SingleBlogComponent
      ),
  },
];
