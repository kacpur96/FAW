import { Component, OnInit } from '@angular/core';
import { ListItem } from './interfaces/list-item.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: Array<ListItem> = [
    { klucz: 'klucz 1', wartosc: 1 , dana: 'dana 1'},
    { klucz: 'klucz 2', wartosc: 2 , dana: 'dana 2'},
    { klucz: 'klucz 3', wartosc: 3 , dana: 'dana 3'},
    { klucz: 'klucz 4', wartosc: 4 , dana: 'dana 4'},
  ];

  constructor(
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.appService.setItems(this.items);
  }
}
