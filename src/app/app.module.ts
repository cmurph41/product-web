import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component'; 
import { DocumentationComponent } from './documentation/documentation.component';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    DocumentationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [
    ProductService, 
    {
      provide: APP_INITIALIZER,
      useFactory: (pr: ProductService) => function() { return pr.initContent()},
      deps: [ProductService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
