import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { StorageListComponent } from './component/storage-list/storage-list.component';
import { DeleteModalComponent } from './component/shared/delete-modal/delete-modal.component';
import { CreateStorageAccountComponent } from './component/storage-list/create-storage-account/create-storage-account.component';
import { ViewStorageListComponent } from './component/storage-list/view-storage-list/view-storage-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { CapitalisedPipe } from './component/products-list/capitalised.pipe';
import { ViewProductsComponent } from './component/products-list/view-products/view-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StorageListComponent,
    DeleteModalComponent,
    CreateStorageAccountComponent,
    ViewStorageListComponent,
    FooterComponent,
    ProductsListComponent,
    CapitalisedPipe,
    ViewProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {}, },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
