import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStorage } from '../../common.interface';

@Component({
  selector: 'app-view-storage-list',
  templateUrl: './view-storage-list.component.html',
  styleUrls: ['./view-storage-list.component.scss']
})
export class ViewStorageListComponent {

constructor(@Inject(MAT_DIALOG_DATA) public storagedata:IStorage ){

    console.log(storagedata.accessKey)
   
}

}
