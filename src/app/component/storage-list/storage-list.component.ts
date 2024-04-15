import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { IStorage } from '../common.interface';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.scss'],
})
export class StorageListComponent {
  storageData: IStorage[] = [];
  searchText:string = '';
  storageDataList:IStorage[] = [];
  multipleData!:IStorage[];
  isMultiple!:boolean
  constructor(private httpServices: CommonService) {}

  ngOnInit() {
    this.getStorage();
  }
  getStorage() {
    this.httpServices.getStorage().subscribe((result) => {
      if (result) {
        this.storageData = result;
        this.storageDataList = this.storageData;
        this.multipleData = this.storageData.filter((el)=>el.AccessKey === 'multiple');
      
      }
    });
  }
  searchData(event:KeyboardEvent){
    this.storageDataList = this.storageData.filter(item => {
      return item.storageAccount.toLowerCase().includes(this.searchText.toLowerCase());
    })
    if(event.key === 'Backspace'){
       this.getStorage()
    }
  }
  delete(id: number) {
    this.httpServices.delete(id).subscribe((res) => {
      this.getStorage();
    });
  }
}
