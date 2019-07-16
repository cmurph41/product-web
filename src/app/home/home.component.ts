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
    error: any = new Map();

    constructor(private productService: ProductService) {
        this.error.showError = false;
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
            .subscribe(
                (data: any) => {
                this.content = data;
                this.error.showError=false;

            },
            (err:any)=> {
                this.error.showError=true;
                this.error.message = err.error;
                this.content.asin = false;
                
            }
            );
    }

    ngOnDestroy() {
    }
}