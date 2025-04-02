import { Routes } from '@angular/router';

export const FORMS_ROUTES: Routes = [
  // Redirect `/forms`
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  {
    path: 'template',
    loadComponent: () =>
      import('./template-forms/template-forms.component').then(
        (m) => m.TemplateFormsComponent
      ),
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms.component').then(
        (m) => m.ReactiveFormsComponent
      ),
  },
  // Catch-all for invalid routes within `/forms`
  { path: '**', redirectTo: 'template' },
];
