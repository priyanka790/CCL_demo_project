import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { CommonService } from '../../common.service';
import { IStorage } from '../../common.interface';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { DeleteModalComponent } from '../../shared/delete-modal/delete-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-storage-account',
  templateUrl: './create-storage-account.component.html',
  styleUrls: ['./create-storage-account.component.scss'],
})
export class CreateStorageAccountComponent {
  storageForm!: FormGroup;
  storageData!: IStorage[];
  addedMessage!: string;
  EditTitle!: string | null;
  editForm!: FormGroup;
  isNew!: boolean;
  idIndex!:number;
  editFormData!: IStorage;
  updateDataFormData!: IStorage;
  constructor(
    private fb: FormBuilder,
    private httpServices: CommonService,
    private dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; storeEditData: number; isData: boolean }
  ) {}
  ngOnInit() {
    this.EditTitle = this.data?.title;
    this.isNew = this.data?.isData;
    this.idIndex = this.data?.storeEditData
    if (this.isNew) {
      if (this.data.storeEditData > 0) {
        this.setEditPopup(this.data.storeEditData);
      }
    }

    this.storageForm = this.fb.group({
      storageAccount: ['', Validators.required],
      version: ['', Validators.required],
      accessKey: ['', Validators.required],
      bucketCount: ['', Validators.required],
      size: ['', Validators.required],
    });
  }
  setEditPopup(id: number) {
    this.editForm = this.fb.group({
      storageAccount: this.fb.control(''),
      version: this.fb.control(''),
      accessKey: this.fb.control(''),
      bucketCount: this.fb.control(''),
      size: this.fb.control(''),
    });
    this.httpServices.singleProducts(id).subscribe((res) => {
      this.editFormData = res;
      this.editForm.patchValue({
        id: res.id,
        storageAccount: res.storageAccount,
        version: res.version,
        accessKey: res.accessKey,
        bucketCount: res.bucketCount,
        size: res.size,
      });
    });
  }
  update(id:number, product: IStorage) {
    this.httpServices.updateStorageData(id, product).subscribe((res) => {
      if (res) {
        this.addedMessage = 'Data added successfully';
        this.dialogClose()
      }
    });
  }
  submit() {
    if(this.isNew){
       this.update(this.idIndex, this.editForm.value)
    }

    if (this.storageForm.valid) {
      const formData = {
        id: this.storageForm.get('id')?.value,
        storageAccount: this.storageForm.get('storageAccount')?.value,
        version: this.storageForm.get('version')?.value,
        accessKey: this.storageForm.get('accessKey')?.value,
        bucketCount: this.storageForm.get('bucketCount')?.value,
        size: this.storageForm.get('size')?.value,
        status:this.storageForm.get('status')?.value
      };
      this.httpServices.postStorage(formData).subscribe((res) => {
        if (res) {
      
            this.addedMessage = 'Data added successfully';
        
          
          this.dialogClose();
        }
      });
    }
  }
  dialogClose() {
    this.dialogRef.close();
  }
  myFile(event:Event){
   const inputElement = event.target as HTMLInputElement;
   const file = inputElement.files;
   const formData = new FormData();
   if(file && file.length > 0){
      for(let i = 0; i < file.length; i++){
        const fileObj = file[i];
        formData.append('file', fileObj, fileObj.name)
      }
   }
   


  }
}
