import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'fuse-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdduserComponent>) { }

  ngOnInit() {
  }
  confirmSelection() {
    this.dialogRef.close();

}
}
