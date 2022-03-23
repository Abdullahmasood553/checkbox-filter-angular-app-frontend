import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductFilterComponent } from './filter/product-filter/product-filter.component';
import { ProductFilterDetailComponent } from './filter-detail/product-filter-detail/product-filter-detail.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductFilterComponent },
  { path: 'product-detail/:id', component: ProductFilterDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterComponent,
    ProductFilterDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
