import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    /**
     *
     */
    constructor(
    private _http: HttpClient
    ) {
    }

    get(id) {
      return this._http.get(environment.API_ENDPOINT + '/v1/product/' + id);
    }

    create(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/product', payload);
    }

    update(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/product/update', payload);

    }
    list(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/product/list', payload);
    }

    delete(id) {
      return this._http.delete(environment.API_ENDPOINT + '/v1/product/' + id);
    }

    upload(payload, id) {
      return this._http.post(environment.API_ENDPOINT + '/v1/product/upload/' + id, payload);
    }

    getProductForInventory(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/product/getProductsForInventory', payload);
    }
}


