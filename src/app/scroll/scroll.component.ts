import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  AfterContentInit,
  Input,
} from '@angular/core';
import {
  Subject,
  map,
  filter,
  of,
  takeUntil,
  Observable,
  fromEvent,
  Subscription,
  from,
  pairwise,
  delay,
  take,
  switchMap,
} from 'rxjs';
import { ScrollItemsService } from '../scroll-items.service';
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  @ViewChild('container', { static: true }) container: any;
  currentPage = 0;
  itemsPerPage = 10;
  items: any = [];
  itemsToShow: any = [];
  pageSize: number = 10;
  totalItems = 100;
  itemsSubscription: Subscription | undefined;
  loading: boolean = false;
  addItem: number = 1;
  constructor(private scrollService: ScrollItemsService) {}
  ngOnInit() {
    this.items = this.scrollService.items;
    this.itemsToShow = this.items.slice(0, this.pageSize);
    //Emits events every time user scrolls container
    const scroll$ = fromEvent(this.container.nativeElement, 'scroll');
    //filters these events, so they only emit when user scrolls down
    const scrollDown$ = scroll$.pipe(
      map(() => this.container.nativeElement.scrollTop),
      pairwise(),
      filter(([y1, y2]) => y2 > y1),
      map(([y1, y2]) => y2)
    );
    //emits when user hits the bottom
    const scrollAllTheWay$ = scrollDown$.pipe(
      filter(
        (y) =>
          y + this.container.nativeElement.clientHeight >=
          this.container.nativeElement.scrollHeight
      )
    );
    this.itemsSubscription = scrollAllTheWay$.subscribe(() => {
      this.loading = true;
      setTimeout(() => {
        this.itemsToShow = this.itemsToShow.concat(
          this.items.slice(
            this.itemsToShow.length,
            this.itemsToShow.length + this.addItem
          )
        );
        this.loading = false;
      }, 1000);
    });
  }
}
