import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ItemsService } from './items.service';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, map, distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('result') result: any;
  search: FormControl = new FormControl();
  constructor(public itemsService: ItemsService) {}
  ngAfterViewInit(): void {
    this.search.valueChanges
      .pipe(
        map((value) => this.callApi(value)),
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe((value) => (this.result!.nativeElement.textContent = value));
  }
  callApi(name: string) {
    const searchedItems = this.itemsService.itemList
      .filter((item) => item.name.includes(name) && name != '')
      .map((item) => item.name);
    if (searchedItems.length) {
      return searchedItems;
    }
    return 'No match found';
  }
}
