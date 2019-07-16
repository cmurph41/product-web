/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AmzProduct } from '../models/amz-product';
import { JsProduct } from '../models/js-product';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly amzAllUsingGETPath = '/amz-products';
  static readonly amzOneUsingGETPath = '/amz-products/{id}';
  static readonly jsAllUsingGETPath = '/js-products';
  static readonly newProductUsingPOSTPath = '/js-products';
  static readonly jsOneUsingGETPath = '/js-products/{id}';
  static readonly deleteProductUsingDELETEPath = '/products/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  amzAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AmzProduct>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/amz-products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AmzProduct>>;
      })
    );
  }
  /**
   * @return OK
   */
  amzAllUsingGET(): __Observable<Array<AmzProduct>> {
    return this.amzAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AmzProduct>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  amzOneUsingGETResponse(id: string): __Observable<__StrictHttpResponse<AmzProduct>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/amz-products/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AmzProduct>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  amzOneUsingGET(id: string): __Observable<AmzProduct> {
    return this.amzOneUsingGETResponse(id).pipe(
      __map(_r => _r.body as AmzProduct)
    );
  }

  /**
   * @return OK
   */
  jsAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<JsProduct>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/js-products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<JsProduct>>;
      })
    );
  }
  /**
   * @return OK
   */
  jsAllUsingGET(): __Observable<Array<JsProduct>> {
    return this.jsAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<JsProduct>)
    );
  }

  /**
   * @param newProduct newProduct
   * @return OK
   */
  newProductUsingPOSTResponse(newProduct: JsProduct): __Observable<__StrictHttpResponse<JsProduct>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newProduct;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/js-products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JsProduct>;
      })
    );
  }
  /**
   * @param newProduct newProduct
   * @return OK
   */
  newProductUsingPOST(newProduct: JsProduct): __Observable<JsProduct> {
    return this.newProductUsingPOSTResponse(newProduct).pipe(
      __map(_r => _r.body as JsProduct)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  jsOneUsingGETResponse(id: string): __Observable<__StrictHttpResponse<Array<JsProduct>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/js-products/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<JsProduct>>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  jsOneUsingGET(id: string): __Observable<Array<JsProduct>> {
    return this.jsOneUsingGETResponse(id).pipe(
      __map(_r => _r.body as Array<JsProduct>)
    );
  }

  /**
   * @param id id
   */
  deleteProductUsingDELETEResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/products/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteProductUsingDELETE(id: string): __Observable<null> {
    return this.deleteProductUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
