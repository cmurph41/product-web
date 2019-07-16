import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    content: any = new Map();
    ASIN: string;
    amzContent: any = new Map();
    jsContent: any = new Map();
    showTestCases = "Show";

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.setUpSub();
    }
    toggleTestCases() {
        if (this.showTestCases == "Show") {
            this.showTestCases = "Hide";
        } else {
            this.showTestCases = "Show";
        }
    }
    public setUpSub() {
        this.productService
            .getAllJsIds()
            .subscribe((data: any) => {
                this.jsContent = data;
            }
            );
        this.productService
            .getAllAmzIds()
            .subscribe((data: any) => {
                this.amzContent = data;
            });
    }

    getProductById(id: any): void {
        let temp = id.viewModel;
        this.productService
            .getContentById(temp)
            .subscribe((data: any) => {
                this.content = data;
            }
            );
    }

    ngOnDestroy() {
    }
}