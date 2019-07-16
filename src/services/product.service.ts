import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductControllerService } from '../app/api/services';


@Injectable({
    providedIn: 'root'
  })
export class ProductService {
    public content: any = new Map();

    constructor (private productControllerService: ProductControllerService) {
        this.initContent();
    }

    public initContent() {
        const obs = this.productControllerService.jsAllUsingGET();
        obs.subscribe(
            (data:any)=>{ 
            this.content = data;
        });
    }

    getContentById(id: string) : Observable<any> {      
        return this.productControllerService
        .jsOneUsingGET(id)
        ;
    }

    getAllJsIds() : Observable<any> {        
        return this.productControllerService.jsAllUsingGET()
        ;
    }
    getAllAmzIds() : Observable<any> {        
        return this.productControllerService.amzAllUsingGET()
        ;
    }
}