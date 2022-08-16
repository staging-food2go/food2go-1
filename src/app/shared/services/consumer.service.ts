import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
    /**
     *
     */
    constructor(
    private _http: HttpClient
    ) {
    }

    search(keyword) {
      return this._http.get(environment.API_ENDPOINT + '/v1/consumer/search?keyword=' + keyword);
    }

    setSelectedStore(store) {
      localStorage.setItem('selectedStore', JSON.stringify(store));
    }

    getSelectedStore() {
      let store = localStorage.getItem('selectedStore');
      if (store == undefined) {
        return null;
      } else {
        return JSON.parse(store);
      }
    }

    clearSelectedStore() {
      localStorage.removeItem('selectedStore');
    }
}


