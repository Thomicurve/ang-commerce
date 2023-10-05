import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'ang-commerce'
  },
  {
    path: 'ang-commerce',
    loadChildren: () => import('./features/ang-commerce/ang-commerce.module').then(m => m.AngCommerceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
