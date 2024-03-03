import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./layout/mianPage/main/main.component').then(m => m.MainComponent),
    children: [
      {
        path: "",
        loadComponent: () => import('./layout/mianPage/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: "content",
        loadComponent: () => import('./shared/component/content/content.component').then(m => m.ContentComponent)
      }
    ]
  }
];

