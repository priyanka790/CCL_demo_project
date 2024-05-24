import { Component, EventEmitter, Output } from '@angular/core';
import { IProducts } from '../products.interface';
import { ProductsService } from '../products.service';
import { IData } from '../../common.interface';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent {
  productsData: IProducts[] = [];
  arrayOfObjects = [
    { name: 'John elssworth', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'bob anthony gomez', age: 35 },
  ];
  getData!: any;
  @Output() dataEvent = new EventEmitter<IData[]>();

  constructor(private httpService: ProductsService) {}

  ngOnInit() {
    this.getData = this.arrayOfObjects.map((el) => {
      const newArr = el.name.split(' ').map((elem) => {
        return elem.charAt(0).toUpperCase() + elem.slice(1);
      });
      return newArr.join(' ');
    });
    console.log(this.getData);
    this.getProducts();
  }
  getProducts() {
    this.httpService.getProducts().subscribe((res) => {
      this.productsData = res;
      // console.log(this.dataEvent.emit(res))
    });
  }
}
