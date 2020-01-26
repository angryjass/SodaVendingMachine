import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Soda } from './models/soda';

@Injectable()
export class DataService {

    private url = "/api/SodaVendingMachine";

    constructor(private http: HttpClient) {
    }

    getSodaStorage() {
        return this.http.get(this.url + '/getsodastorage');
    }

    getCoinsStorage() {
        return this.http.get(this.url + '/getcoinsstorage');
    }

    createSoda(soda: Soda) {
        return this.http.post(this.url, soda);
    }

    updateSoda(soda: Soda) {

        return this.http.put(this.url + '/' + soda.id, soda);
    }
    deleteSoda(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}