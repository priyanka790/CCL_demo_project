import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { IStorage } from '../common.interface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../shared/delete-modal/delete-modal.component';
import { CreateStorageAccountComponent } from './create-storage-account/create-storage-account.component';
import { DialogRef } from '@angular/cdk/dialog';
import { ViewStorageListComponent } from './view-storage-list/view-storage-list.component';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.scss'],
})
export class StorageListComponent {
  storageData: IStorage[] = [];
  searchText: string = '';
  storageDataList: IStorage[] = [];
  multipleData!: IStorage[];
  isMultiple!: boolean;
  count!: number;
  addStorageText!: string;
  addStorageData!: IStorage;

  constructor(private httpServices: CommonService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getStorage();
  }
  getStorage() {
    this.httpServices.getStorage().subscribe(
      (result) => {
        if (result) {
          this.storageData = result;
          this.storageDataList = [...this.storageData];

          let addedText = 'only multiple data are active';
          this.storageDataList.map((el) => {
            return (this.addStorageText = addedText);
          });
          this.count = this.storageData.length;
          this.multipleData = this.storageData.filter(
            (el) => el.accessKey === 'multiple'
          );
          const mySecondSolution = this.storageData.map((el) => {
            const namedis = el.status;

            return namedis;
          });

          console.log('second', mySecondSolution);

          const myFirstSolution = this.storageData.map((item) => {
            const { storageAccount, ...rest } = item;
            return rest;
          });
          console.log(myFirstSolution);
        }
      },
      (error) => {
        if (error.status) {
          console.log('error', error.statusText);
        }
      }
    );
  }
  searchData(event: KeyboardEvent) {
    this.storageDataList = this.storageData.filter((item) => {
      return item.storageAccount
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
    });
    if (event.key === 'Backspace') {
      this.getStorage();
    }
  }
  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px',
      data: {
        title: 'Delete Storage data',
        message: `Are you sure you want to delete id :  ${id}`,
        buttons: [
          {
            label: 'Yes',
            value: 'yes',
          },
          { label: 'Cancel', value: 'cancel' },
        ],
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {
        this.httpServices.delete(id).subscribe((res) => {
          this.getStorage();
        });
      } else if (result === 'no') {
        dialogRef.close();
      }
    });
  }
  openStorageAccount() {
    const dilaogRef = this.dialog.open(CreateStorageAccountComponent, {
      width: '650px',
      height: '500px',
    });
    dilaogRef.afterClosed().subscribe((result) => {
      console.log('data', this.storageDataList.unshift(result));
      this.getStorage();
    });
  }

  openEditBox(id: number) {
    this.editBox(id, 'Edit Storage', true);
  }
  editBox(storeId: number, title: string, isEditData: boolean) {
    console.log('edit data show');
    const dialogRef = this.dialog.open(CreateStorageAccountComponent, {
      width: '650px',
      height: '500px',
      data: {
        title: title,
        storeEditData: storeId,
        isData: isEditData,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log('data added succesfully');
      this.getStorage();
    });
  }
  view(data: IStorage) {
    const dialogRef = this.dialog.open(ViewStorageListComponent, {
      width: '500px',
      data: data,
    });
  }
  addBtn() {
    let addStorageDataOne = {
      id: 1,
      storageAccount: "12",
      version: "1",
      accessKey: "this.addStorageData.accessKey",
      bucketCount: 1,
      size: 1,
      status:"this.addStorageData.status"
    }

    this.storageDataList.push(addStorageDataOne)
    console.log('addStorageDataOne', addStorageDataOne);
  }
}
