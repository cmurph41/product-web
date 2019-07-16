import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-web-app';
  content : any = new Map();
  $content: Observable<any>;
  contentSub: Subscription;

  constructor(){}

}
