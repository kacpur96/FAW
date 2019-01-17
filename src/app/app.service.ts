import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListItem } from './interfaces/list-item.interface';

@Injectable()
export class AppService {
  private items: BehaviorSubject<Array<ListItem>> = new BehaviorSubject(null);

  public getItems(): Observable<Array<ListItem>> {
    return this.items.asObservable();
  }

  public setItems(items: Array<ListItem>): void {
    this.items.next(items);
  }
}
