import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemList = [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' }];
  constructor() {}
}
