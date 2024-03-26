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
  }
];

