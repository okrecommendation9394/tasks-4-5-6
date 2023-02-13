import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
const BASE_URL = 'http://node-hnapi.herokuapp.com';
@Injectable({
  providedIn: 'root',
})
export class ScrollItemsService {
  items = [
    { name: 'Item1' },
    { name: 'Item2' },
    { name: 'Item3' },
    { name: 'Item4' },
    { name: 'Item5' },
    { name: 'Item6' },
    { name: 'Item7' },
    { name: 'Item8' },
    { name: 'Item9' },
    { name: 'Item10' },
    { name: 'Item11' },
    { name: 'Item12' },
    { name: 'Item13' },
    { name: 'Item14' },
    { name: 'Item15' },
    { name: 'Item16' },
    { name: 'Item17' },
    { name: 'Item18' },
    { name: 'Item19' },
    { name: 'Item20' },
    { name: 'Item21' },
    { name: 'Item22' },
    { name: 'Item23' },
    { name: 'Item24' },
    { name: 'Item25' },
    { name: 'Item26' },
    { name: 'Item27' },
    { name: 'Item28' },
    { name: 'Item19' },
    { name: 'Item30' },
    { name: 'Item31' },
    { name: 'Item32' },
    { name: 'Item33' },
    { name: 'Item34' },
    { name: 'Item35' },
    { name: 'Item36' },
    { name: 'Item37' },
    { name: 'Item38' },
    { name: 'Item39' },
    { name: 'Item40' },
  ];
  constructor(private httpClient: HttpClient) {}
  getData(page: number = 1) {
    return this.httpClient.get(`${BASE_URL}/news?page=${page}`);
  }
}
