import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ApiResponse, IData } from '../common.interface';
import { Data } from '@angular/router';
import { IProducts } from './products.interface';
import { MatDialog } from '@angular/material/dialog';
import { ViewStorageListComponent } from '../storage-list/view-storage-list/view-storage-list.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  productsList: IData[] = [];
  deleteMesg!: 'Delete Message success';
  //upperMessage!: string[][];
  upperMessage: IData | undefined;
  isOpenPanel!: boolean;
  panelDescripton!: string;
  panelHeader!: string;
  imageName!: string;
  nameList!: string[];
  receivedData!: IData[];
  offerString!: string;
  constructor(private httpServices: CommonService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getProducts();
  }

  showData(id: string) {
    let data = id;
    this.nameList.find((el) => {
      if (el === id) {
        if (data === 'Automated outbound tialer') {
          this.offerString = 'Show offer';
        }
      }
    });
  }

  //  if(this.offerString === "Conferencing (Group Talk)"){
  //   this.offerString = ''
  //  }else{
  //   this.offerString = "Please add offer";
  //  }
  //  console.log(id)

  getProducts() {
    this.httpServices.getProducts().subscribe((result: ApiResponse) => {
      this.productsList = result.data;
      this.productsList.forEach((el) => {
        el.attributes.description =
          el.attributes.description + 'offer selected';
      });

      this.getNameList();
    });
  }
  getNameList() {
    this.nameList = this.productsList
      .filter((el) => el.attributes.name)
      .map((el) => el.attributes.name);
    console.log(this.nameList);
  }

  delete(id: number) {
    // console.log(id);
    // this.httpServices.deleteProducts(id).subscribe((res: IData) => {
    //   console.log(res.id);
    //   if (res) {
    //     console.log('res', res.id);
    //     this.deleteMesg;
    //   }
    // });
  }
  openPanel(id: number) {
    this.productsList.find((el) => {
      this.isOpenPanel = true;
      if (el.id === id) {
        this.panelHeader = el.attributes.name;
        this.panelDescripton = el.attributes.description;
        console.log('this.panelDescripton', this.panelDescripton);
      }
    });
    // this.productsList.forEach((el)=>{
    //   if(indexData){
    //    this.panelDescripton = el.attributes.description
    //   }
    // })
  }
  closePanel() {
    this.isOpenPanel = false;
  }
}
