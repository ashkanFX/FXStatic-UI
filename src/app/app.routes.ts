import {Routes} from '@angular/router';
import {authGuard} from "./shared/auth/auth.guard";

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./routes/base/base.component').then(m => m.BaseComponent),
    children: [
      {
        path: "",
        loadComponent: () => import('./routes/base/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: "content",
        loadComponent: () => import('./routes/base/content/content.component').then(m => m.ContentComponent)
      }
    ]
  },
  {
    path: 'admin', loadComponent: () => import ('./routes/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "post",
        loadComponent: () => import('./routes/admin/post/post.component').then(m => m.PostComponent),
        canActivate: [authGuard],
      },
      {
        path: "user",
        loadComponent: () => import('./routes/admin/user/user.component').then(m => m.UserComponent),
        canActivate: [authGuard],
      },
      {
        path: "category",
        loadComponent: () => import('./routes/admin/category/category.component').then(m => m.CategoryComponent),
        canActivate: [authGuard],
      }

    ]
  },
  {
    path: 'login', loadComponent: () => import ('./routes/base/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
];

