import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { IMenu } from '../common.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuList: IMenu[] = [];
  constructor(private httpServices: CommonService, private route: Router) {}

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.httpServices.getMenu().subscribe((res) => {
      this.menuList = res;
    });
  }
}
