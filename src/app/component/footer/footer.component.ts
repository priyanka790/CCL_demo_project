import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { IFooter } from '../common.interface';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerText: IFooter[] = [];
  copywrites!: string;
  dataString!: Date;
  constructor(private serviceList: CommonService) {}
  ngOnInit() {
    this.getFooterList();
  }
  getFooterList() {
    this.serviceList.getFooter().subscribe((res) => {
      const footerTextData = res.map((el) => {
        this.copywrites = el.data.attributes.copyrights;
        this.dataString = el.data.attributes.updatedAt;
        // this.dataString.toLocaleUpperCase()
      });
    
    });
  }
}
