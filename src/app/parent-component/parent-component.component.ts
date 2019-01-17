import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListItem } from '../interfaces/list-item.interface';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  private itemsSub: Subscription;
  public items: Array<ListItem> = [];

  constructor(
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.itemsSub = this.appService.getItems().subscribe((items: Array<ListItem>) => {
      this.items = items;
    });
  }

  public ngOnDestroy(): void {
    if (this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }

  public getItemsCount(): number {
    return this.items.length;
  }
}
