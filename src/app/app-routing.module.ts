import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageListComponent } from './component/storage-list/storage-list.component';

const routes: Routes = [
  {
    path: '',
    component: StorageListComponent,
  },

  { path: 'storage', component: StorageListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
