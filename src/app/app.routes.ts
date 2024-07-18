import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./routes/mianPage/main/main.component').then(m => m.MainComponent),
    children: [
      {
        path: "",
        loadComponent: () => import('./routes/mianPage/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: "content",
        loadComponent: () => import('./routes/content/content.component').then(m => m.ContentComponent)
      }
    ]
  },
  {
    path: 'admin', loadComponent: () => import ('./routes/admin/admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: "post",
        loadComponent: () => import('./routes/admin/post/post.component').then(m => m.PostComponent)
      }, {
        path: "category",
        loadComponent: () => import('./routes/admin/category/category.component').then(m => m.CategoryComponent)
      }
    ]
  },
];

