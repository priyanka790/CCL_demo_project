import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageListComponent } from './component/storage-list/storage-list.component';
import { ProductsListComponent } from './component/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: StorageListComponent,
  },
  { path: 'storage', component: StorageListComponent },
  { path: 'products', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
