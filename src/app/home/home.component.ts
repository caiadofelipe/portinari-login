import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  constructor() { }

  ngOnInit() {
  }

}
