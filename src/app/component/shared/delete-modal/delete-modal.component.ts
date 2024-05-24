import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  @Output() deleteText = new EventEmitter<string>()
  constructor( public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ){

  }
  ngOnInit(){
     this.deleteText.emit(this.data);
     console.log("this data", this.data)
  }
  onButtonClick(buttonName:string){
    this.dialogRef.close(buttonName)
  }
}
