import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('../features/forms/forms.routes').then((m) => m.FORMS_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
